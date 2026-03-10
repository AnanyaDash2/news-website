import { Search, Menu, Sun, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const navItems = ["Home", "India", "World", "Politics", "Entertainment", "Sports", "Business", "Technology"]

  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>{currentDate}</span>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>New Delhi</span>
              <Sun className="h-3 w-3 ml-2" />
              <span>28°C</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <span>Breaking: Latest updates on national politics</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">NewsToday</h1>
            <span className="text-sm text-gray-500 ml-2 hidden md:block">India's Leading News Portal</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Input type="text" placeholder="Search news..." className="pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 border-t">
        <div className="container mx-auto px-4">
          <div className="flex space-x-0 overflow-x-auto">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-white transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-red-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
