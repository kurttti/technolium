"use client"
import { Hero } from "@/components/hero"
import { Specialties } from "@/components/specialties"
import { Regions } from "@/components/regions"
import { AdmissionPlan } from "@/components/admission-plan"
import { EducationFormat } from "@/components/education-format"
import { CommercialViability } from "@/components/commercial-viability"
import { News } from "@/components/news"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Specialties />
      <Regions />
      <AdmissionPlan />
      <EducationFormat />
      <CommercialViability />
      <News />
      <ContactFooter />
    </main>
  )
}

