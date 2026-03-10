import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NewsGrid from "@/components/news-grid"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen max-w-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <HeroSection />
            <NewsGrid />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
