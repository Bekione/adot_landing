import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/data/blogs';
import { BlogPostRaw } from '@/types/blog';

interface RouteParams {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams // Fix: Type the second argument properly
) {
  const { id } = params;

  const blogPost = (blogPosts as BlogPostRaw[]).find((post) => post.id === id);

  if (!blogPost) {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }

  return NextResponse.json(blogPost);
}
