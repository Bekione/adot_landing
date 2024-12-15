import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type BlogCategory = 
  | 'All'
  | 'New'
  | 'Popular'
  | 'Tech'
  | 'Business'
  | 'Design'
  | 'Productivity'
  | 'AI & Innovation'
  | 'Cybersecurity'
  | 'Uncategorized'


  export interface BlogPostRaw {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Raw content as string
    category: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
    image: string;
    readTime: string;
    popularity?: number; // Temporary value for popularity (0 for low, 1 for high)
  }
  

export interface BlogPostSerialized {
  id: string;
  title: string;
  excerpt: string;
  content: MDXRemoteSerializeResult; // Serialized content for MDXRemote
  category: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  image: string;
  readTime: string;
}
