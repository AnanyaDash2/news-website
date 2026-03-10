import TrendingList from "@/components/trending-list"
import { Facebook, Twitter, Instagram, Youtube, Cloud, Sun } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Trending News */}
      <TrendingList />

      {/* Weather Widget */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center">
          <Sun className="h-4 w-4 mr-2 text-yellow-500" />
          Weather Today
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">New Delhi</span>
            <div className="flex items-center">
              <Sun className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-semibold">28°C</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Mumbai</span>
            <div className="flex items-center">
              <Cloud className="h-4 w-4 text-gray-500 mr-1" />
              <span className="font-semibold">26°C</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Bangalore</span>
            <div className="flex items-center">
              <Sun className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-semibold">24°C</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
        <div className="flex space-x-3">
          <a href="#" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" className="p-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Advertisement */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <div className="text-gray-500 text-sm mb-2">Advertisement</div>
        <div className="bg-white rounded p-4 border-2 border-dashed border-gray-300">
          <div className="text-gray-400 text-xs">300 x 250</div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-red-600 text-white rounded-lg p-4">
        <h3 className="font-bold mb-2">Daily Newsletter</h3>
        <p className="text-sm mb-3 text-red-100">Get the latest news delivered to your inbox</p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-gray-900 rounded text-sm"
          />
          <button className="w-full bg-white text-red-600 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  )
}
