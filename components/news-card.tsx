import Link from 'next/link'
import { Article } from '@/lib/mock-data'

interface NewsCardProps {
  article: Article
  size?: 'standard' | 'large'
}

export function NewsCard({ article, size = 'standard' }: NewsCardProps) {
  const isLarge = size === 'large'

  return (
    <Link href={`/article/${article.id}`}>
      <div className="group overflow-hidden bg-white border border-border rounded-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-red-700">
        {/* Image Container */}
        <div className={`relative overflow-hidden bg-gray-200 flex-shrink-0 ${isLarge ? 'aspect-square' : 'aspect-video'}`}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {/* Live Badge */}
          {article.isLive && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded-full">
              LIVE
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className={isLarge ? 'p-6' : 'p-4'}>
          {/* Category & Read Time */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase text-red-700 tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-gray-500">
              {article.readTime} min read
            </span>
          </div>

          {/* Headline */}
          <h3 className={`font-serif font-bold mb-2 leading-tight text-foreground line-clamp-2 transition-colors duration-200 group-hover:text-red-700 ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className={`text-gray-600 line-clamp-2 mb-3 transition-colors duration-200 group-hover:text-foreground ${isLarge ? 'text-base' : 'text-sm'}`}>
            {article.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
