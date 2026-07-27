import { GlobalHeader } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsCard } from '@/components/news-card'
import { VideoCard } from '@/components/video-card'
import { mockArticles, politicsArticles, businessArticles, sportsArticles, videoArticles, featuredArticle } from '@/lib/mock-data'

export const metadata = {
  title: 'Reference Newspaper - Nigerian News Today',
  description: 'Breaking news, politics, business, sports and entertainment from Nigeria. Get the latest news and in-depth analysis.',
}

export default function Home() {
  return (
    <>
      <GlobalHeader />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section - Bento Box Layout */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Featured Hero - spans 2 columns */}
              {featuredArticle && (
                <div className="md:col-span-2">
                  <NewsCard article={featuredArticle} size="large" />
                </div>
              )}

              {/* Trending Articles Stack */}
              <div className="flex flex-col gap-6">
                {mockArticles.slice(1, 3).map((article) => (
                  <NewsCard key={article.id} article={article} size="standard" />
                ))}
              </div>
            </div>
          </section>

          {/* Video Carousel Section */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoArticles.map((article) => (
                <VideoCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* 3-Column Category Masonry Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Politics */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Politics & Metro
                </h3>
                <div className="space-y-6">
                  {politicsArticles.slice(0, 3).map((article) => (
                    <NewsCard key={article.id} article={article} size="standard" />
                  ))}
                </div>
              </div>

              {/* Business */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Business & Economy
                </h3>
                <div className="space-y-6">
                  {businessArticles.slice(0, 3).map((article) => (
                    <NewsCard key={article.id} article={article} size="standard" />
                  ))}
                </div>
              </div>

              {/* Sports */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Sports & Entertainment
                </h3>
                <div className="space-y-6">
                  {sportsArticles.slice(0, 3).map((article) => (
                    <NewsCard key={article.id} article={article} size="standard" />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Category Browse Section */}
          <section className="py-12 border-t border-b border-gray-200">
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Politics', 'Business', 'Sports'].map((category) => (
                <a
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-red-700 transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-red-700 transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">View all stories</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
