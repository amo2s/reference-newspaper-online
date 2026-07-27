'use client'

import { Article } from '@/lib/mock-data'

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <article className="py-8">
      {/* Hero Image */}
      <div className="w-full aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Featured Image</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Social */}
        <aside className="lg:col-span-1 order-last lg:order-first">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-serif font-bold mb-4">Share</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 border border-border hover:bg-gray-50 text-sm font-medium transition-colors">
                  Twitter
                </button>
                <button className="w-full px-4 py-2 border border-border hover:bg-gray-50 text-sm font-medium transition-colors">
                  Facebook
                </button>
                <button className="w-full px-4 py-2 border border-border hover:bg-gray-50 text-sm font-medium transition-colors">
                  LinkedIn
                </button>
                <button className="w-full px-4 py-2 border border-border hover:bg-gray-50 text-sm font-medium transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-serif font-bold mb-3">About Author</h3>
              <p className="text-sm text-muted-foreground">
                {article.author} is a staff writer covering {article.category} and emerging trends.
              </p>
            </div>
          </div>
        </aside>

        {/* Center Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-breaking">
                {article.category.toUpperCase()}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.readTime} min read
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-b border-t border-border py-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-medium">{article.author}</span>
                  <span className="text-muted-foreground">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <button className="px-6 py-2 bg-crimson text-white font-medium hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              {article.content}
            </p>
            
            <div className="bg-gray-50 border-l-4 border-crimson p-6 my-8 rounded">
              <p className="font-serif italic text-lg">
                &quot;This is a key quote from the article that summarizes the main point and draws reader attention to the most important information.&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-2">— {article.author}</p>
            </div>
            
            <p className="text-lg leading-relaxed text-foreground">
              {article.content}
            </p>
            
            <h2 className="font-serif text-3xl font-bold mt-12 mb-6">
              Key Takeaways
            </h2>
            
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-crimson font-bold flex-shrink-0">•</span>
                <span>First key point about the story and its implications</span>
              </li>
              <li className="flex gap-4">
                <span className="text-crimson font-bold flex-shrink-0">•</span>
                <span>Second important development in this ongoing situation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-crimson font-bold flex-shrink-0">•</span>
                <span>What experts predict will happen next in this field</span>
              </li>
            </ul>
          </div>

          {/* Related Articles */}
          <div className="border-t border-border pt-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-gray-500">Related</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold line-clamp-2 mb-2 hover:text-crimson transition-colors cursor-pointer">
                      Related Article {i}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Continue reading about related topics
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
