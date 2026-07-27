import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/mock-data'

export function ArticleCard({ article, size = 'standard' }: { article: Article; size?: 'standard' | 'large' }) {
  const isLarge = size === 'large'

  return (
    <Link href={`/article/${article.id}`}>
      <div className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className={`relative overflow-hidden bg-muted flex-shrink-0 ${isLarge ? 'aspect-square' : 'aspect-video'}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
            loading="lazy"
          />
          {article.isLive && (
            <div className="absolute top-3 right-3 badge-live">
              LIVE
            </div>
          )}
          {article.isBreaking && (
            <div className="absolute top-3 left-3 badge-breaking">
              Breaking
            </div>
          )}
        </div>
        <div className={isLarge ? 'p-6' : 'p-4'}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase text-crimson tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.readTime} min read
            </span>
          </div>
          <h3 className={`font-serif font-bold mb-2 leading-tight text-foreground line-clamp-2 transition-colors duration-200 group-hover:text-crimson ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
            {article.title}
          </h3>
          <p className={`text-muted-foreground line-clamp-2 mb-3 transition-colors duration-200 group-hover:text-foreground ${isLarge ? 'text-base' : 'text-sm'}`}>
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
