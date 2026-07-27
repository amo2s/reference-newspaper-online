import Link from 'next/link'
import { Article } from '@/lib/mock-data'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="group overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase text-crimson tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.readTime} min read
            </span>
          </div>
          <h3 className="font-serif text-lg font-bold mb-2 leading-tight group-hover:text-crimson transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
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
