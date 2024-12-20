import { NextResponse } from 'next/server'
import { blogPosts } from '@/data/blogs'
import { BlogPostRaw } from '@/types/blog'

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  return NextResponse.json(blogPosts as BlogPostRaw[])
}
