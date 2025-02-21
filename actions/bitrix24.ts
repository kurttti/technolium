"use server"

type ApplicationType = 'standard' | 'individual' | 'quick-start' | 'webinar';

interface BitrixLeadData {
  TITLE: string
  NAME: string
  EMAIL: Array<{ VALUE: string, VALUE_TYPE: string }>
  PHONE: Array<{ VALUE: string, VALUE_TYPE: string }>
  STATUS_ID: string
  COMMENTS?: string
  UTM_SOURCE?: string
  UTM_MEDIUM?: string
  UTM_CAMPAIGN?: string
  UTM_CONTENT?: string
  UTM_TERM?: string
  UTM_REFERRER?: string
}

interface BitrixContactData {
  NAME: string
  EMAIL: Array<{ VALUE: string, VALUE_TYPE: string }>
  PHONE: Array<{ VALUE: string, VALUE_TYPE: string }>
  TYPE_ID: string
  COMMENTS?: string
}

interface BitrixDealData {
  TITLE: string
  CONTACT_ID: string
  ASSIGNED_BY_ID: string
  STAGE_ID: string
  CATEGORY_ID: number
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

async function getLeadStages(): Promise<any> {
  const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.status.list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filter: { "ENTITY_ID": "DEAL_STAGE" }
    })
  })
  const result = await response.json()
  return result.result
}

async function findExistingLead(email: string, phone: string): Promise<string | null> {
  const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.lead.list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filter: { EMAIL: email, PHONE: phone },
      select: ["ID"],
    }),
  })
  const result = await response.json()
  return result.result && result.result.length > 0 ? result.result[0].ID : null
}

async function updateLeadStatus(leadId: string, statusId: string): Promise<boolean> {
  const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.lead.update`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: leadId,
      fields: { STATUS_ID: statusId }
    }),
  })
  const result = await response.json()
  return !!result.result
}

async function createLead(data: BitrixLeadData): Promise<string> {
  const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.lead.add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields: data }),
  })
  const result = await response.json()
  if (!result.result) {
    throw new Error("Failed to create lead")
  }
  return result.result
}

export async function handleWebinarRegistration(
  name: string,
  email: string,
  phone: string,
  webinarTitle: string,
  utmData?: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
    term?: string
    referrer?: string
  }
): Promise<string> {
  
  // Получаем список стадий
  const stages = await getLeadStages();
  
  // Находим стадию ВЕБ ЗАЯВКА по имени
  const webinarStage = stages.find((stage: any) => stage.NAME === "ВЕБ ЗАЯВКА");
  if (!webinarStage) {
    throw new Error("ВЕБ ЗАЯВКА stage not found");
  }
  
  // Создаем контакт или получаем существующий
  const contactId = await createOrGetContact(name, email, phone);
  
  // Создаем сделку для вебинара
  const dealData: BitrixDealData = {
    TITLE: `${name}: ${webinarTitle}`,
    CONTACT_ID: contactId,
    ASSIGNED_BY_ID: process.env.BITRIX24_USER_ID!,
    STAGE_ID: webinarStage.STATUS_ID,
    CATEGORY_ID: 0,  // Используем основную воронку
    COMMENTS: `Зарегистрировался на вебинар: ${webinarTitle}`,
    ...(utmData?.source && { UTM_SOURCE: utmData.source }),
    ...(utmData?.medium && { UTM_MEDIUM: utmData.medium }),
    ...(utmData?.campaign && { UTM_CAMPAIGN: utmData.campaign }),
    ...(utmData?.content && { UTM_CONTENT: utmData.content }),
    ...(utmData?.term && { UTM_TERM: utmData.term }),
    ...(utmData?.referrer && { UTM_REFERRER: utmData.referrer })
  }

  // Создаем сделку
  const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.deal.add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields: dealData })
  })

  const result = await response.json()

  if (!result.result) {
    throw new Error("Failed to create webinar deal")
  }

  return result.result
}

export async function updateWebinarAttendance(
  email: string,
  phone: string,
  attended: boolean
): Promise<boolean> {
  const leadId = await findExistingLead(email, phone)
  if (!leadId) {
    return false
  }

  const newStatus = attended ? "ATTENDED_WEBINAR" : "MISSED_WEBINAR"
  return await updateLeadStatus(leadId, newStatus)
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
    // console.log('=== Starting createBitrixDeal ===');
    // console.log('FormData entries:', Object.fromEntries(formData.entries()));
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

    // console.log('Form type:', type);
    // console.log('Plan:', plan);

    // Если это регистрация на вебинар, используем специальную функцию
    if (type === "webinar") {
      // console.log('Processing webinar registration');
      const webinarTitle = formData.get("buttonType") as string || courseTitle || "Вебинар"
      // console.log('Calling handleWebinarRegistration with:', {
      //   name,
      //   email,
      //   phone,
      //   webinarTitle,
      //   utmData: {
      //     source: utmSource,
      //     medium: utmMedium,
      //     campaign: utmCampaign,
      //     content: utmContent,
      //     term: utmTerm,
      //     referrer: utmReferrer
      //   }
      // });
      await handleWebinarRegistration(name, email, phone, webinarTitle, {
        source: utmSource,
        medium: utmMedium,
        campaign: utmCampaign,
        content: utmContent,
        term: utmTerm,
        referrer: utmReferrer
      })
      return { success: true, message: "Регистрация на вебинар успешно выполнена" }
    }

    const leadTitle = courseTitle
      ? `Запись на курс: ${courseTitle}`
      : type === "application"
        ? plan === "standard"
          ? "Заявка на стандартное обучение"
          : plan === "individual"
            ? "Заявка на индивидуальное ведение"
            : "Заявка на быстрый старт"
        : type === "conditions"
          ? "Запрос условий"
          : "Общий запрос"

    const dealData: BitrixDealData = {
      TITLE: `${name}: ${leadTitle}`,
      CONTACT_ID: await createOrGetContact(name, email, phone),
      ASSIGNED_BY_ID: process.env.BITRIX24_USER_ID!,
      STAGE_ID: "NEW",
      CATEGORY_ID: 0, // 0 - это ID основной воронки продаж
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
