import Image from 'next/image'
import Link from 'next/link'
import { BlogPostRaw } from '@/types/blog'

interface RelatedBlogCardProps {
  post: BlogPostRaw
}

const RelatedBlogCard: React.FC<RelatedBlogCardProps> = ({ post }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#503c3c] mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`} className="text-[#503c3c] hover:underline">
          Read more
        </Link>
      </div>
    </div>
  )
}

export default RelatedBlogCard
