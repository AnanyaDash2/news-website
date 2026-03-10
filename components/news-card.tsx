import { Clock, User } from "lucide-react"
import Image from "next/image"

interface NewsArticle {
  id: number
  title: string
  summary: string
  image: string
  category: string
  author: string
  timestamp: string
}

interface NewsCardProps {
  article: NewsArticle
}

export default function NewsCard({ article }: NewsCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Politics: "bg-red-100 text-red-800",
      Business: "bg-green-100 text-green-800",
      Sports: "bg-blue-100 text-blue-800",
      Entertainment: "bg-purple-100 text-purple-800",
      Technology: "bg-indigo-100 text-indigo-800",
      Science: "bg-teal-100 text-teal-800",
      Legal: "bg-gray-100 text-gray-800",
      Education: "bg-yellow-100 text-yellow-800",
      Environment: "bg-emerald-100 text-emerald-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight hover:text-red-600 cursor-pointer transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">{article.summary}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{article.timestamp}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
