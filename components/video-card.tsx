import Link from 'next/link'
import { Article } from '@/lib/mock-data'

interface VideoCardProps {
  article: Article
}

export function VideoCard({ article }: VideoCardProps) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="group relative aspect-video overflow-hidden rounded-lg bg-black">
        {/* Background Image */}
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
          loading="lazy"
        />

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red-700 bg-opacity-80 flex items-center justify-center group-hover:bg-opacity-100 group-hover:scale-110 transition-all duration-300">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Live Badge */}
        {article.isLive && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded-full">
            LIVE
          </div>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
          <h3 className="font-serif font-bold text-white text-sm line-clamp-2 group-hover:text-red-300 transition-colors duration-200">
            {article.title}
          </h3>
          <p className="text-xs text-gray-300 mt-1">{article.readTime} min</p>
        </div>
      </div>
    </Link>
  )
}
