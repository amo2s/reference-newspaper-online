import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroCard } from '@/components/hero-card'
import { ArticleCard } from '@/components/article-card'
import { mockArticles, videoArticles } from '@/lib/mock-data'

export const metadata = {
  title: 'Reference Newspaper - Nigerian News Today',
  description: 'Breaking news, politics, business, sports and entertainment from Nigeria. Get the latest news and in-depth analysis.',
}

export default function Home() {
  // Organize articles by category
  const politicsArticles = mockArticles.filter(a => a.category === 'Politics')
  const businessArticles = mockArticles.filter(a => a.category === 'Business')
  const sportsArticles = mockArticles.filter(a => a.category === 'Sports')
  
  const heroArticle = mockArticles[0] // FG civil service posting

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Bento Grid Layout */}
        <section className="max-w-7xl mx-auto px-4 py-12 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Large hero card - spans 2 columns */}
            <div className="md:col-span-2">
              <HeroCard article={heroArticle} />
            </div>

            {/* Trending cards stack on the right */}
            <div className="flex flex-col gap-6">
              {mockArticles.slice(1, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Video Carousel Section */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoArticles.map((article) => (
                <div key={article.id} className="group relative aspect-video bg-black rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {article.isLive && (
                    <div className="absolute top-3 right-3 badge-live">
                      LIVE
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="font-serif font-bold text-white text-sm line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Column Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Politics */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                Politics & Metro
              </h3>
              <div className="space-y-4">
                {politicsArticles.slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Business */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                Business & Economy
              </h3>
              <div className="space-y-4">
                {businessArticles.slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sports & Entertainment */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                Sports & Entertainment
              </h3>
              <div className="space-y-4">
                {sportsArticles.slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>

          {/* Browse Categories */}
          <div className="py-12 border-t border-b border-border">
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">
              Browse Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Politics', 'Business', 'Sports', 'Entertainment'].map((category) => (
                <a
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="group p-6 bg-white border border-border rounded-lg hover:shadow-lg hover:border-crimson transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-crimson transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    All stories
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
