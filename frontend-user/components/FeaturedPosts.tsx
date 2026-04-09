"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage?: string;
  readingTime: string;
}

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        className="text-3xl font-bold mb-10 text-gray-900 dark:text-white dark:drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        精选文章
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post, index) => (
          <FeaturedPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeaturedPostCard({ post, index }: { post: Post; index: number }) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/posts/${post.slug}`}>
        <article className="group h-full bg-white dark:bg-gradient-to-br dark:from-[#1a1f3a] dark:to-[#0f1729] rounded-xl shadow-md hover:shadow-2xl dark:shadow-[0_0_20px_rgba(0,212,255,0.1)] dark:hover:shadow-[0_0_40px_rgba(0,212,255,0.2),0_0_60px_rgba(0,255,245,0.15)] transition-all duration-300 overflow-hidden border border-gray-200 dark:border-[#00d4ff]/20 hover:border-blue-500 dark:hover:border-[#00d4ff]/60 flex flex-col">
          <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-[#0a0e27] dark:to-[#1a1f3a]">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-[#0a0e27] dark:to-[#1a1f3a] z-10">
                <div className="w-12 h-12 border-4 border-blue-500 dark:border-[#00d4ff] border-t-transparent rounded-full animate-spin"></div>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-blue-600 dark:bg-gradient-to-r dark:from-[#00d4ff] dark:to-[#00fff5] text-white text-xs rounded-full font-medium dark:shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#00d4ff] dark:group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-[#00d4ff]/10">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString("zh-CN", { month: 'numeric', day: 'numeric' })}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
