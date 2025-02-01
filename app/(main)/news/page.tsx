import { NewsArticles } from "@/components/features/news-articles"
import { Contacts } from "@/components/features/contacts"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-4">
      <main>
        <div className="w-full">
          <NewsArticles />
        </div>
      </main>
      <Contacts />
      <Footer />
    </div>
  )
}
