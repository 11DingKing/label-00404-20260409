import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
  author?: string;
}

// 确保目录存在
function ensureDirectoryExists() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export async function getAllPosts(): Promise<Post[]> {
  ensureDirectoryExists();
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        content,
        date: data.date || new Date().toISOString(),
        category: data.category || "未分类",
        tags: data.tags || [],
        coverImage: data.coverImage,
        readingTime: stats.text,
        author: data.author,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensureDirectoryExists();
  
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    content,
    date: data.date || new Date().toISOString(),
    category: data.category || "未分类",
    tags: data.tags || [],
    coverImage: data.coverImage,
    readingTime: stats.text,
    author: data.author,
  };
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

export async function searchPosts(query: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);
  if (!currentPost) return [];

  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);
  const currentDate = new Date(currentPost.date);

  // 计算相关性分数
  const postsWithScore = otherPosts.map((post) => {
    let score = 0;

    // 相同分类加分
    if (post.category === currentPost.category) {
      score += 3;
    }

    // 相同标签加分
    const commonTags = post.tags.filter((tag) =>
      currentPost.tags.includes(tag)
    );
    score += commonTags.length * 2;

    // 时间衰减加分
    const postDate = new Date(post.date);
    const daysDiff = Math.abs(
      (currentDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (daysDiff <= 30) {
      score += 2;
    } else if (daysDiff <= 90) {
      score += 1;
    }

    return { post, score };
  });

  // 按分数排序，同分时按发布时间倒序
  return postsWithScore
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.post);
}
