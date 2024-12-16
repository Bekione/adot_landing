import { Metadata } from "next";
import { BlogPostSerialized, BlogPostRaw } from "@/types/blog";
import { serialize } from "next-mdx-remote/serialize";
import BlogContent from "@/components/blog/BlogContent";
import RelatedBlogCard from "@/components/blog/RelatedBlogCard";
import GradientWord from "@/components/ui/GradientWord";
import { AlertCircle } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";
import { createMetadata } from "@/lib/create-metadata";

export async function generateStaticParams() {
  // Fetch all blog posts to predefine the dynamic routes
  const allPosts = await getAllBlogPosts();

  return allPosts.map((post) => ({
    id: post.id, // Ensure `id` matches the dynamic route
  }));
}

// Fetch a single blog post
async function getBlogPost(id: string): Promise<BlogPostSerialized | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;

  const blogPost = await res.json();
  const mdxContent = await serialize(blogPost.content);

  return { ...blogPost, content: mdxContent };
}

// Fetch all blog posts for related posts
async function getAllBlogPosts(): Promise<BlogPostRaw[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: "no-store",
  });
  return res.ok ? res.json() : [];
}

// Generate Metadata for the blog post dynamically
export async function generateMetadata(context: { params: { id: string } }): Promise<Metadata> {
  const { params } = context; // Destructure params asynchronously
  const blogPost = await getBlogPost(params.id);


  if (!blogPost) {
    return createMetadata({
      title: "Blog Not Found | Adot Technologies",
      description: "The blog post you are looking for does not exist.",
    });
  }

  return createMetadata({
    title: blogPost.title,
    description: blogPost.excerpt || "Read this insightful article.",
    image: blogPost.image || `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-banners/og-blog.jpg`,
    path: `/blog/${params.id}`,
    type: "article",
  });
}


export default async function BlogPostPage(context: { params: { id: string } }) {
  const { params } = context; // Destructure params after accessing context
  const blogPost = await getBlogPost(params.id);
  const allPosts = await getAllBlogPosts();

  if (!blogPost) {
    return (
      <div className="min-h-72 py-24 flex items-center justify-center">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center p-8 bg-gray-200 w-fit h-fit rounded-lg mx-auto"
        >
          <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Blog Post Not Found
          </h3>
          <p className="text-gray-600">Make sure you are on the right page.</p>
        </MotionWrapper>
      </div>
    );
  }

  // Find related posts
  const relatedPosts = allPosts
    .filter((p) => p.id !== blogPost.id && p.category === blogPost.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Blog Content */}
      <BlogContent blogPost={blogPost} />

      {/* Related Posts */}
      <MotionWrapper
        className="my-16 flex flex-col items-center mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GradientWord word="Related Posts" size="sm" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 mx-10">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
              <RelatedBlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg col-span-full">
              <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No related blog posts found
              </h3>
              <p className="text-gray-600">
                Tab back to the blog to see other posts.
              </p>
            </div>
          )}
        </div>
      </MotionWrapper>
    </div>
  );
}
