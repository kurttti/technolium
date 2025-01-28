"use server"

interface BitrixDealData {
  TITLE: string
  CONTACT_ID: string
  ASSIGNED_BY_ID: string
  STAGE_ID: string
  COMMENTS: string
  UF_CRM_COURSE?: string
  UF_CRM_COURSE_PRICE?: string
  UF_CRM_COURSE_DURATION?: string
  UTM_SOURCE?: string
  UTM_MEDIUM?: string
  UTM_CAMPAIGN?: string
  UTM_CONTENT?: string
  UTM_TERM?: string
  UTM_REFERRER?: string
}

export async function createOrGetContact(name: string, email: string, phone: string): Promise<string> {
  // Сначала попробуем найти контакт по email или телефону
  const searchResponse = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.contact.list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filter: { EMAIL: email, PHONE: phone },
      select: ["ID"],
    }),
  })
  const searchResult = await searchResponse.json()

  if (searchResult.result && searchResult.result.length > 0) {
    return searchResult.result[0].ID
  }

  // Если контакт не найден, создаем новый
  const createResponse = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.contact.add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        NAME: name,
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
      },
    }),
  })
  const createResult = await createResponse.json()

  if (createResult.result) {
    return createResult.result
  }

  throw new Error("Failed to create or get contact")
}

export async function createBitrixDeal(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string
    const courseTitle = formData.get("courseTitle") as string
    const coursePrice = formData.get("coursePrice") as string
    const courseDuration = formData.get("courseDuration") as string
    const type = formData.get("type") as string
    const plan = formData.get("plan") as string
    const utmSource = formData.get("utm_source") as string
    const utmMedium = formData.get("utm_medium") as string
    const utmCampaign = formData.get("utm_campaign") as string
    const utmContent = formData.get("utm_content") as string
    const utmTerm = formData.get("utm_term") as string
    const utmReferrer = formData.get("utm_referrer") as string

    const leadTitle = courseTitle
      ? `Запись на курс: ${courseTitle}`
      : type === "application"
        ? plan === "standard"
          ? "Заявка на стандартное обучение"
          : "Заявка на льготное обучение"
        : type === "conditions"
          ? "Запрос условий"
          : "Общий запрос"

    const dealData: BitrixDealData = {
      TITLE: `${name}: ${leadTitle}`,
      CONTACT_ID: await createOrGetContact(name, email, phone),
      ASSIGNED_BY_ID: process.env.BITRIX24_USER_ID!,
      STAGE_ID: "NEW",
      COMMENTS: message || "Без комментария",
    }

    if (courseTitle) {
      dealData.UF_CRM_COURSE = courseTitle
      dealData.UF_CRM_COURSE_PRICE = coursePrice
      dealData.UF_CRM_COURSE_DURATION = courseDuration
    }

    // Add UTM parameters to the deal
    if (utmSource) dealData.UTM_SOURCE = utmSource
    if (utmMedium) dealData.UTM_MEDIUM = utmMedium
    if (utmCampaign) dealData.UTM_CAMPAIGN = utmCampaign
    if (utmContent) dealData.UTM_CONTENT = utmContent
    if (utmTerm) dealData.UTM_TERM = utmTerm
    if (utmReferrer) dealData.UTM_REFERRER = utmReferrer

    const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.deal.add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: dealData
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to create lead")
    }

    const data = await response.json()

    if (!data.result) {
      throw new Error("Invalid response from Bitrix24")
    }

    return { success: true, message: "Заявка успешно отправлена" }
  } catch (error) {
    console.error("Error creating Bitrix24 lead:", error)
    return { success: false, message: "Произошла ошибка при отправке заявки" }
  }
}
