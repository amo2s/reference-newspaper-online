'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { ArticleCard } from '@/components/article-card'
import { mockArticles } from '@/lib/mock-data'

const CATEGORIES = ['politics', 'technology', 'business', 'science']

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [selectedSort, setSelectedSort] = useState('latest')
  const category = params.slug.toLowerCase()

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  const filteredArticles = mockArticles.filter(
    a => a.category.toLowerCase() === category
  )

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (selectedSort === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (selectedSort === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground">
              {filteredArticles.length} stories in {categoryName}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-border">
            <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
            {['latest', 'oldest', 'trending'].map((sort) => (
              <button
                key={sort}
                onClick={() => setSelectedSort(sort)}
                className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                  selectedSort === sort
                    ? 'bg-foreground text-background'
                    : 'border border-border hover:border-foreground'
                }`}
              >
                {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {sortedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl font-bold mb-6">Other Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.filter(cat => cat !== category).map((cat) => (
                <a
                  key={cat}
                  href={`/category/${cat}`}
                  className="group p-6 border border-border rounded-lg hover:border-crimson hover:bg-gray-50 transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg group-hover:text-crimson transition-colors">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
