import Link from 'next/link'
import { Article } from '@/lib/mock-data'

export function HeroCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="group overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        <div className="aspect-square relative overflow-hidden bg-muted flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image</span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="badge-breaking mb-3 w-fit">
            Breaking
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-crimson transition-colors">
            {article.title}
          </h2>
          <p className="text-base text-muted-foreground mb-4 flex-grow">
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
