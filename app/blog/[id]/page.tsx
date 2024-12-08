'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' // Import `useParams` hook from next/navigation
import { BlogPostSerialized } from '@/types/blog'
import BlogContent from '@/components/blog/BlogContent'
import { serialize } from 'next-mdx-remote/serialize'
import { BlogPostRaw } from '@/types/blog'
import RelatedBlogCard from '@/components/blog/RelatedBlogCard'
import { motion } from 'framer-motion'
import GradientWord from '@/components/ui/GradientWord'

async function getBlogPost(id: string): Promise<BlogPostSerialized | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${id}`)

  if (!res.ok) {
    return null
  }

  const blogPost = await res.json()

  // Serialize the MDX content before passing it to the component
  const mdxContent = await serialize(blogPost.content)

  return {
    ...blogPost,
    content: mdxContent // Return serialized content
  }
}

async function getAllBlogPosts(): Promise<BlogPostRaw[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`)

  if (!res.ok) {
    return []
  }

  const blogPosts: BlogPostRaw[] = await res.json()
  return blogPosts
}

export default function BlogPostPage() {
  const { id } = useParams() // Use `useParams()` to retrieve the `id` param from the URL

  const [blogPost, setBlogPost] = useState<BlogPostSerialized | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostRaw[]>([])

  useEffect(() => {
    if (!id || Array.isArray(id)) return // Make sure `id` is a string and available

    const fetchData = async () => {
      const blogData = await getBlogPost(id) // Now `id` is guaranteed to be a string
      if (blogData) {
        setBlogPost(blogData)
        const allPosts = await getAllBlogPosts()
        const related = allPosts
          .filter((p) => p.id !== blogData.id && p.category === blogData.category)
          .slice(0, 3)
        setRelatedPosts(related)
      }
    }

    fetchData()
  }, [id]) // Use `id` in the dependency array

  if (!blogPost) {
    return <div className="text-center mt-10">Blog post not found.</div>
  }

  return (
    <div className='min-h-screen'>
      {/* Blog Content */}
      <BlogContent blogPost={blogPost} />

      {/* Related Posts */}
      <motion.div
        className="my-16 flex flex-col items-center mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GradientWord word='Related Posts' />
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 mx-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
                duration: 0.8,
              },
            },
          }}
        >
          {relatedPosts.length > 0 ? (
            relatedPosts.map((relatedPost) => (
              <motion.div
                key={relatedPost.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.5 }}
              >
                <RelatedBlogCard post={relatedPost} />
              </motion.div>
            ))
          ) : (
            <p>No related posts found.</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
