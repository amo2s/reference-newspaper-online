import Link from 'next/link'
import { Article } from '@/lib/mock-data'

export function HeroCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col rounded-lg border border-border">
        <div className="aspect-square relative overflow-hidden bg-muted flex-shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
            loading="lazy"
          />
          {article.isBreaking && (
            <div className="absolute top-4 left-4 badge-breaking">
              Breaking
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase text-crimson tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.readTime} min read
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight text-foreground group-hover:text-crimson transition-colors duration-200">
            {article.title}
          </h2>
          <p className="text-base text-muted-foreground mb-4 flex-grow group-hover:text-foreground transition-colors duration-200">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
