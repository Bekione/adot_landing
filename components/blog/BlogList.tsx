"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPostRaw, BlogCategory } from "@/types/blog";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { BlogCard } from "./BlogCard";
import GradientWord from "../ui/GradientWord";
import GradientHeader from "../GradientHeader";
import { AlertCircle, Loader } from "lucide-react";

// Categories
const categories: (BlogCategory | "All")[] = [
  "New",
  "Popular",
  "Tech",
  "Business",
  "Design",
  "Productivity",
  "AI & Innovation",
  "Cybersecurity",
  "Uncategorized",
];

export function BlogList() {
  const [posts, setPosts] = useState<BlogPostRaw[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostRaw[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<BlogPostRaw[]>([]);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">(
    "All"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Add a loading state
  const postsPerPage = 6;

  // Fetch Posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch("/api/blogs");
        const data: BlogPostRaw[] = await res.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchPosts();
  }, []);

  // Filter logic for category and search
  useEffect(() => {
    let updatedPosts = posts;

    // Filter by category
    if (activeCategory === "Popular") {
      updatedPosts = updatedPosts.filter((post) => post.popularity === 1);
    } else if (activeCategory === "New") {
      updatedPosts = updatedPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
    } else if (activeCategory !== "All") {
      updatedPosts = updatedPosts.filter(
        (post) => post.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      updatedPosts = updatedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(updatedPosts);
    setDisplayedPosts(updatedPosts.slice(0, postsPerPage * page));
  }, [posts, activeCategory, searchQuery, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="min-h-screen mb-20">
      <GradientHeader title="" subtitle="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12 flex flex-col items-center"
        >
          <GradientWord word="Insights & Updates" type="secondary" />
          <GradientWord
            word="Empowering Your Business Journey"
            type="secondary"
          />
        </motion.div>
      </GradientHeader>

      <div className="container px-4 md:px-6 mt-8 mx-auto">
        {/* Search & Category */}
        <SearchBar onSearch={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader className="animate-spin text-primary/90" size={50} />
          </div>
        ) : (
          <>
            {/* Blog Posts */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery + displayedPosts.length}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto"
              >
                {displayedPosts.length > 0 ? (
                  displayedPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg col-span-full row-span-full"
                  >
                    <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No blog posts found
                    </h3>
                    <p className="text-gray-600">
                      {activeCategory !== "All"
                        ? `There are no posts in the ${activeCategory} category.`
                        : "No posts match your search criteria."}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Load More */}
            {posts &&
              displayedPosts.length <
                filteredPosts.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-12 text-center"
                >
                  <button
                    onClick={loadMore}
                    className="px-8 py-2 rounded-md bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary"
                  >
                    Load more
                  </button>
                </motion.div>
              )}
          </>
        )}
      </div>
    </section>
  );
}

export default BlogList;
