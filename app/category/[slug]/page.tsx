'use client'

import { useState } from 'react'
import { GlobalHeader } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsCard } from '@/components/news-card'
import { mockArticles } from '@/lib/mock-data'

const CATEGORIES = ['Politics', 'Business', 'Sports']

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [selectedSort, setSelectedSort] = useState('latest')

  // Normalize category name (politics -> Politics)
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
      <GlobalHeader />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Header */}
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {categoryName}
            </h1>
            <p className="text-lg text-gray-600">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'story' : 'stories'} available
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <span className="text-sm font-semibold text-foreground">Sort by:</span>
            {['latest', 'oldest', 'popular'].map((sort) => (
              <button
                key={sort}
                onClick={() => setSelectedSort(sort)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSort === sort
                    ? 'bg-red-700 text-white'
                    : 'border border-gray-300 text-foreground hover:border-red-700 hover:text-red-700'
                }`}
              >
                {sort === 'latest' && 'Latest'}
                {sort === 'oldest' && 'Oldest'}
                {sort === 'popular' && 'Popular'}
              </button>
            ))}
          </div>

          {/* Articles CSS Grid - Masonry */}
          {sortedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sortedArticles.map((article) => (
                <NewsCard key={article.id} article={article} size="standard" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No articles found in {categoryName}
              </p>
            </div>
          )}

          {/* Browse Other Categories */}
          <div className="pt-12 border-t border-gray-200">
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">
              Explore Other Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {CATEGORIES.filter(cat => cat !== categoryName).map((cat) => (
                <a
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-red-700 transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-red-700 transition-colors">
                    {cat}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">Read more</p>
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
