"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  category: string;
}

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <motion.section
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        相关文章
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <RelatedPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

function RelatedPostCard({ post, index }: { post: Post; index: number }) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/posts/${post.slug}`}>
        <article className="group h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-[#0a0e27] dark:to-[#1a1f3a]">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-[#0a0e27] dark:to-[#1a1f3a] z-10">
                <div className="w-8 h-8 border-2 border-blue-500 dark:border-[#00d4ff] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage || 'https://picsum.photos/800/400'}
              alt={post.title}
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImageLoading(false)}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                setImageLoading(false);
              }}
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <span className="text-xs text-blue-600 dark:text-blue-400">
              {post.category}
            </span>
            <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
