import { NewsArticles } from "@/components/news-articles"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"
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
