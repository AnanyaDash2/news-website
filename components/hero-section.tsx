import { Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const featuredArticle = {
    id: 1,
    title: "Major Economic Reforms Announced by Finance Ministry",
    summary:
      "The government has unveiled a comprehensive package of economic reforms aimed at boosting growth and creating employment opportunities across various sectors.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Politics",
    author: "Rajesh Kumar",
    timestamp: "2 hours ago",
    isBreaking: true,
  }

  const subFeatured = [
    {
      id: 2,
      title: "India Wins Historic Cricket Series Against Australia",
      image: "/placeholder.svg?height=200&width=300",
      category: "Sports",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      title: "Tech Giants Announce Major Investment in Indian Startups",
      image: "/placeholder.svg?height=200&width=300",
      category: "Technology",
      timestamp: "4 hours ago",
    },
    {
      id: 4,
      title: "Monsoon Forecast: Heavy Rainfall Expected This Week",
      image: "/placeholder.svg?height=200&width=300",
      category: "Weather",
      timestamp: "5 hours ago",
    },
  ]

  return (
    <section className="mb-8">
      {/* Breaking News Banner */}
      {featuredArticle.isBreaking && (
        <div className="bg-red-600 text-white px-4 py-2 mb-4 rounded">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-2 py-1 text-xs font-bold rounded mr-3 animate-pulse">
              BREAKING
            </span>
            <span className="text-sm font-medium">{featuredArticle.title}</span>
          </div>
        </div>
      )}

      {/* Main Featured Article */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="md:flex">
          <div className="md:w-2/3">
            <Image
              src={featuredArticle.image || "/placeholder.svg"}
              alt={featuredArticle.title}
              width={600}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="md:w-1/3 p-6">
            <div className="flex items-center mb-3">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                {featuredArticle.category}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">{featuredArticle.title}</h1>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{featuredArticle.summary}</p>
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <User className="h-3 w-3 mr-1" />
              <span className="mr-3">{featuredArticle.author}</span>
              <Clock className="h-3 w-3 mr-1" />
              <span>{featuredArticle.timestamp}</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">Read Full Story</Button>
          </div>
        </div>
      </div>

      {/* Sub-featured Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subFeatured.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-semibold rounded">
                {article.category}
              </span>
              <h3 className="font-semibold text-gray-900 mt-2 mb-2 text-sm leading-tight">{article.title}</h3>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{article.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
