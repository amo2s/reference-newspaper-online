'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleCard } from '@/components/article-card'
import { mockArticles } from '@/lib/mock-data'

const CATEGORIES = ['Politics', 'Business', 'Sports', 'Entertainment']

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [selectedSort, setSelectedSort] = useState('latest')
  
  // Normalize category name
  const categoryName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const filteredArticles = mockArticles.filter(
    a => a.category.toLowerCase() === categoryName.toLowerCase()
  )

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (selectedSort === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (selectedSort === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (selectedSort === 'popular') {
      return b.readTime - a.readTime
    }
    return 0
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Header */}
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'story' : 'stories'} in {categoryName}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b-2 border-border">
            <span className="text-sm font-semibold text-foreground">Sort by:</span>
            {['latest', 'oldest', 'popular'].map((sort) => (
              <button
                key={sort}
                onClick={() => setSelectedSort(sort)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSort === sort
                    ? 'bg-crimson text-white'
                    : 'border border-border text-foreground hover:border-crimson'
                }`}
              >
                {sort === 'latest' && 'Latest'}
                {sort === 'oldest' && 'Oldest'}
                {sort === 'popular' && 'Popular'}
              </button>
            ))}
          </div>

          {/* Articles Masonry Grid */}
          {sortedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sortedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No articles found in {categoryName}
              </p>
            </div>
          )}

          {/* Other Categories */}
          <div className="pt-12 border-t-2 border-border">
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Explore Other Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.filter(cat => cat !== categoryName).map((cat) => (
                <a
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="group p-6 bg-white border border-border rounded-lg hover:shadow-lg hover:border-crimson transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-crimson transition-colors">
                    {cat}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
