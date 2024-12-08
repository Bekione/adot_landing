import { NextResponse } from 'next/server'
import { blogPosts } from '@/data/blogs'
import { BlogPostRaw } from '@/types/blog'

// Update the type for the second argument to match Next.js requirements
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context; // Extract `params` from `context`
  const { id } = params;

  const blogPost = (blogPosts as BlogPostRaw[]).find((post) => post.id === id);

  if (!blogPost) {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }

  return NextResponse.json(blogPost);
}
