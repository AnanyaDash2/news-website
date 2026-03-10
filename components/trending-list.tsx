import { TrendingUp, Clock } from "lucide-react"

export default function TrendingList() {
  const trendingNews = [
    {
      id: 1,
      title: "Parliament Session: Key Bills to be Discussed",
      timestamp: "30 min ago",
      category: "Politics",
    },
    {
      id: 2,
      title: "IPL Auction: Record Breaking Bids Expected",
      timestamp: "45 min ago",
      category: "Sports",
    },
    {
      id: 3,
      title: "RBI Announces New Monetary Policy Changes",
      timestamp: "1 hour ago",
      category: "Business",
    },
    {
      id: 4,
      title: "Bollywood Celebrity Wedding Creates Social Media Buzz",
      timestamp: "2 hours ago",
      category: "Entertainment",
    },
    {
      id: 5,
      title: "Indian Startup Raises $100M in Series B Funding",
      timestamp: "3 hours ago",
      category: "Technology",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
        <TrendingUp className="h-4 w-4 mr-2 text-red-600" />
        Trending Now
      </h3>

      <div className="space-y-3">
        {trendingNews.map((item, index) => (
          <div key={item.id} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-b-0">
            <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 leading-tight hover:text-red-600 cursor-pointer transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs mr-2">{item.category}</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{item.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-red-600 hover:text-red-700 font-medium">View All Trending →</button>
    </div>
  )
}
