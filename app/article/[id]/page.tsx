import { GlobalHeader } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsCard } from '@/components/news-card'
import { mockArticles } from '@/lib/mock-data'

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = mockArticles.find(a => a.id === params.id)

  if (!article) {
    return (
      <>
        <GlobalHeader />
        <main className="min-h-screen bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">
              The article you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <a href="/" className="inline-block px-6 py-2 bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors">
              Back to Home
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Get related articles from the same category
  const relatedArticles = mockArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <>
      <GlobalHeader />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase text-red-700 tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">
                {article.readTime} min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b border-gray-200">
              <div>
                <span className="font-semibold text-foreground">{article.author}</span>
              </div>
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full aspect-video object-cover rounded-lg"
              loading="eager"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed">{article.content}</p>
            <p className="text-base leading-relaxed text-gray-600 mt-6">
              This article represents Reference Newspaper's commitment to delivering comprehensive, accurate, and timely journalism on the issues shaping Nigeria and the continent. Our reporting maintains the highest editorial standards while remaining accessible to all readers.
            </p>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-12 border-t border-gray-200">
              <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <NewsCard key={related.id} article={related} size="standard" />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
