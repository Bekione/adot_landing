import { NextRequest, NextResponse } from 'next/server'
import { blogPosts } from '@/data/blogs'
import { BlogPostRaw } from '@/types/blog'

// Explicitly type the context parameter
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params
  const blogPost = (blogPosts as BlogPostRaw[]).find((post) => post.id === id)

  if (!blogPost) {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 })
  }

  return NextResponse.json(blogPost)
}
