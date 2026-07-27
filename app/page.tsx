import { Header } from '@/components/header'
import { HeroCard } from '@/components/hero-card'
import { ArticleCard } from '@/components/article-card'
import { mockArticles, trendingArticles, videoArticles } from '@/lib/mock-data'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Bento Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Large hero card - spans 2 columns on desktop */}
            <div className="md:col-span-2">
              <HeroCard article={mockArticles[0]} />
            </div>
            
            {/* Trending cards stack */}
            <div className="flex flex-col gap-6">
              {trendingArticles.slice(1, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Latest News Section */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Latest News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockArticles.slice(1, 7).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoArticles.map((article) => (
                <div key={article.id} className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:brightness-75 transition-all">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center text-white">
                        ▶
                      </div>
                      <span className="text-sm font-medium">{article.readTime} min</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="font-serif font-bold text-white text-sm line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="py-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Politics', 'Technology', 'Business', 'Science'].map((category) => (
                <a
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="group p-6 border border-border rounded-lg hover:border-crimson hover:bg-gray-50 transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg group-hover:text-crimson transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {Math.floor(Math.random() * 100) + 50} stories
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-serif font-bold mb-4">About</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Our Story</a></li>
                  <li><a href="#" className="hover:text-foreground">Team</a></li>
                  <li><a href="#" className="hover:text-foreground">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold mb-4">News</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Politics</a></li>
                  <li><a href="#" className="hover:text-foreground">Technology</a></li>
                  <li><a href="#" className="hover:text-foreground">Business</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground">Terms</a></li>
                  <li><a href="#" className="hover:text-foreground">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold mb-4">Follow</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                  <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Realistic News. All rights reserved.</p>
              <p>Made with precision and journalistic integrity</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
