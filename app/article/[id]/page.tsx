import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleLayout } from '@/components/article-layout'
import { mockArticles } from '@/lib/mock-data'

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = mockArticles.find(a => a.id === params.id)

  if (!article) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <a href="/" className="inline-block px-6 py-2 bg-foreground text-background font-medium hover:bg-gray-800 transition-colors">
              Back to Home
            </a>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <ArticleLayout article={article} />
        </div>
      </main>
      <Footer />
    </>
  )
}
