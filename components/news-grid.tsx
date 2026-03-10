import NewsCard from "@/components/news-card"

export default function NewsGrid() {
  const newsArticles = [
    {
      id: 5,
      title: "Supreme Court Delivers Landmark Judgment on Environmental Protection",
      summary:
        "The apex court has issued comprehensive guidelines for industrial pollution control and environmental conservation.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Legal",
      author: "Priya Sharma",
      timestamp: "1 hour ago",
    },
    {
      id: 6,
      title: "Bollywood Star Announces New Film with International Director",
      summary:
        "The collaboration promises to bring Indian cinema to global audiences with a unique storytelling approach.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Entertainment",
      author: "Arjun Mehta",
      timestamp: "2 hours ago",
    },
    {
      id: 7,
      title: "Indian Space Mission Successfully Launches Communication Satellite",
      summary: "ISRO achieves another milestone with the successful deployment of advanced communication technology.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Science",
      author: "Dr. Kavita Rao",
      timestamp: "3 hours ago",
    },
    {
      id: 8,
      title: "Stock Markets Hit All-Time High Amid Positive Economic Indicators",
      summary: "Sensex and Nifty reach record levels as investors show confidence in economic recovery.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Business",
      author: "Vikram Singh",
      timestamp: "4 hours ago",
    },
    {
      id: 9,
      title: "Education Ministry Launches Digital Learning Initiative for Rural Areas",
      summary: "New program aims to bridge the digital divide and provide quality education to remote communities.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Education",
      author: "Meera Gupta",
      timestamp: "5 hours ago",
    },
    {
      id: 10,
      title: "Climate Change Summit: India Commits to Renewable Energy Goals",
      summary: "The nation pledges significant investment in solar and wind energy infrastructure development.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Environment",
      author: "Rohit Joshi",
      timestamp: "6 hours ago",
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-red-600 text-white rounded">All</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Politics</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Business</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Sports</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors">
          Load More Articles
        </button>
      </div>
    </section>
  )
}
