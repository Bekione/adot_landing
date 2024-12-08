import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/data/blogs';
import { BlogPostRaw } from '@/types/blog';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // Find the blog post by ID
  const blogPost = (blogPosts as BlogPostRaw[]).find((post) => post.id === id);

  if (!blogPost) {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }

  return NextResponse.json(blogPost);
}
