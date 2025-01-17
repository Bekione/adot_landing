"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPostRaw } from "@/types/blog";
import { ArrowRight } from "lucide-react";
import cloudinaryLoader, {
  cloudinaryBlurPlaceholder,
} from "@/lib/image-loader";

interface BlogCardProps {
  post: BlogPostRaw;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary/90">
        <Link href={`/blog/${post.id}`} className="block">
          <Image
            loader={cloudinaryLoader}
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={cloudinaryBlurPlaceholder(post.image)}
            className="object-cover h-auto w-auto transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 py-3 bg-gradient-to-t from-white/40 to-white/20 backdrop-blur-[5px]">
            <div className="flex justify-between font-ubuntuReg">
              <div className="flex flex-col items-start gap-2 text-white text-shadow">
                <span className="text-sm font-medium">{post.author.name}</span>
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="text-white text-shadow">
                <span className="text-sm">{post.category}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-6">
        <Link href={`/blog/${post.id}`}>
          <h3 className="text-xl font-semibold font-ubuntuBold text-primary mb-3 hover:text-primary/90 hover:underline transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.id}`}
            className="group/link flex items-center gap-2 text-primary font-bold font-ubuntuReg hover:text-primary/80"
          >
            Read post
            <ArrowRight className="w-4 h-4 group-hover/link:-rotate-12 transition-transform duration-300" />
          </Link>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
      </div>
    </motion.div>
  );
}
