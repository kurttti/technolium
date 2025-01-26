import { NewsArticles } from "@/components/news-articles"
import { ContactFooter } from "@/components/contact-footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-4">
      <div className="w-full">
        <NewsArticles />
        <ContactFooter />
      </div>
    </div>
  )
}

