import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/data/blogs';
import { BlogPostRaw } from '@/types/blog';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  // Find the blog post by ID
  const blogPost = (blogPosts as BlogPostRaw[]).find((post) => post.id === id);

  // If no blog post is found, return a 404 response
  if (!blogPost) {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }

  // Return the found blog post as JSON
  return NextResponse.json(blogPost);
}
