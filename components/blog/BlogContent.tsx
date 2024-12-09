"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { MDXRemote } from "next-mdx-remote";
import { BlogPostSerialized } from "@/types/blog";
import { TracingBeam } from "../ui/TracingBeam";

export default function BlogContent({
  blogPost,
}: {
  blogPost: BlogPostSerialized;
}) {
  return (
    <article className="bg-gradient-to-b from-white to-[#d5cea3]/10">
      <div className="container px-4 py-12 md:px-6 md:py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#503c3c] hover:text-[#503c3c]/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          {/* Blog Image */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-8">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#503c3c]/90 to-transparent" />
          </div>

          {/* Blog Content */}
          <TracingBeam>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 mb-8">
                {/* Category */}
                <span className="inline-block px-3 py-1 text-sm font-medium bg-[#d5cea3] text-[#503c3c] rounded-full">
                  {blogPost.category}
                </span>

                {/* Title */}
                <h1 className="text-4xl font-bold font-ubuntuBold tracking-tighter sm:text-5xl text-[#503c3c]">
                  {blogPost.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={blogPost.author?.image || "/placeholder.svg"}
                    alt={blogPost.author?.name || "Author"}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-secondary"
                  />
                  <div>
                    <p className="font-medium text-[#503c3c]">
                      {blogPost.author?.name || "Unknown Author"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {blogPost.date} · {blogPost.readTime || "Read Time"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Render MDX Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-7">
                <MDXRemote {...blogPost.content} />
              </div>
            </div>
          </TracingBeam>
        </motion.div>
      </div>
    </article>
  );
}
