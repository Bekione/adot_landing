import { createMetadata } from "@/lib/create-metadata"
import BlogList from "@/components/blog/BlogList"

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Discover insightful articles, news, and updates from Adot Technologies.",
  path: "/blog",
  image: "/images/og-banners/og-blog.jpg",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogList />
    </main>
  )
}

