import { getAllTags, getPostsByTag } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "标签 - Tech Blog",
  description: "浏览所有文章标签",
};

export default async function TagsPage() {
  const tags = await getAllTags();
  
  const tagsWithCount = await Promise.all(
    tags.map(async (tag) => {
      const posts = await getPostsByTag(tag);
      return {
        name: tag,
        count: posts.length,
      };
    })
  );

  // 按文章数量排序
  tagsWithCount.sort((a, b) => b.count - a.count);

  // 计算标签大小（基于文章数量）
  const maxCount = Math.max(...tagsWithCount.map(t => t.count));
  const minCount = Math.min(...tagsWithCount.map(t => t.count));

  const getTagSize = (count: number) => {
    if (maxCount === minCount) return 'text-base';
    const ratio = (count - minCount) / (maxCount - minCount);
    if (ratio > 0.7) return 'text-2xl';
    if (ratio > 0.4) return 'text-xl';
    if (ratio > 0.2) return 'text-lg';
    return 'text-base';
  };

  const getTagColor = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      'from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            文章标签
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            共 <span className="font-semibold text-blue-600 dark:text-blue-400">{tags.length}</span> 个标签
          </p>
        </div>

        {/* Tags Cloud */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-3 justify-center">
            {tagsWithCount.map((tag, index) => (
              <Link
                key={tag.name}
                href={`/tags/${tag.name}`}
                className="group relative"
              >
                <div className={`
                  ${getTagSize(tag.count)}
                  px-5 py-2.5 
                  bg-gradient-to-r ${getTagColor(index)}
                  text-white font-medium rounded-full 
                  shadow-md hover:shadow-xl
                  transform hover:scale-110 
                  transition-all duration-300
                  flex items-center gap-2
                `}>
                  <span className="text-white/80">#</span>
                  <span>{tag.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {tag.count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">最热标签</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tagsWithCount[0]?.name}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">标签总数</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tags.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">文章总数</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tagsWithCount.reduce((sum, tag) => sum + tag.count, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
