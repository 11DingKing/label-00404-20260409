"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
}

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/posts/${post.slug}`} className="block h-full">
        <article className="group h-full bg-white dark:bg-gradient-to-br dark:from-[#1a1f3a] dark:to-[#0f1729] rounded-2xl shadow-md hover:shadow-2xl dark:shadow-[0_0_20px_rgba(0,212,255,0.1)] dark:hover:shadow-[0_0_40px_rgba(0,212,255,0.2),0_0_60px_rgba(0,255,245,0.15)] transition-all duration-300 overflow-hidden border border-gray-200 dark:border-[#00d4ff]/20 hover:border-blue-500 dark:hover:border-[#00d4ff]/60 flex flex-col">
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
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-[#00d4ff] dark:to-[#00fff5] text-white text-sm rounded-full font-medium shadow-lg dark:shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#00d4ff] dark:group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all line-clamp-2 min-h-[3.5rem]">
              {post.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow min-h-[4.5rem]">
              {post.excerpt}
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(post.date).toLocaleDateString("zh-CN")}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readingTime}
                </span>
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 min-h-[2rem]">
                  {post.tags.slice(0, 3).map((tag, idx) => {
                    const colors = [
                      'bg-blue-100 dark:bg-[#00d4ff]/10 text-blue-700 dark:text-[#00d4ff] border-blue-200 dark:border-[#00d4ff]/30',
                      'bg-cyan-100 dark:bg-[#00fff5]/10 text-cyan-700 dark:text-[#00fff5] border-cyan-200 dark:border-[#00fff5]/30',
                      'bg-teal-100 dark:bg-[#14b8a6]/10 text-teal-700 dark:text-[#14b8a6] border-teal-200 dark:border-[#14b8a6]/30',
                    ];
                    return (
                      <span
                        key={tag}
                        className={`inline-flex items-center justify-center px-3 py-1 text-xs rounded-full font-medium border ${colors[idx % colors.length]} transition-all hover:scale-105 transform duration-200 dark:shadow-[0_0_10px_rgba(0,212,255,0.2)] dark:hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]`}
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
