import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);
  const recentPosts = posts.slice(3, 9);

  return (
    <div>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white dark:drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
          最新文章
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
