import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "分类 - Tech Blog",
  description: "浏览所有文章分类",
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  
  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const posts = await getPostsByCategory(category);
      return {
        name: category,
        count: posts.length,
      };
    })
  );

  // 按文章数量排序
  categoriesWithCount.sort((a, b) => b.count - a.count);

  const getCategoryIcon = (index: number) => {
    const icons = [
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>,
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>,
    ];
    return icons[index % icons.length];
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      { bg: 'from-blue-500 to-blue-600', hover: 'hover:from-blue-600 hover:to-blue-700', icon: 'bg-blue-100 dark:bg-blue-900', iconColor: 'text-blue-600 dark:text-blue-400' },
      { bg: 'from-cyan-500 to-cyan-600', hover: 'hover:from-cyan-600 hover:to-cyan-700', icon: 'bg-cyan-100 dark:bg-cyan-900', iconColor: 'text-cyan-600 dark:text-cyan-400' },
      { bg: 'from-teal-500 to-teal-600', hover: 'hover:from-teal-600 hover:to-teal-700', icon: 'bg-teal-100 dark:bg-teal-900', iconColor: 'text-teal-600 dark:text-teal-400' },
      { bg: 'from-green-500 to-green-600', hover: 'hover:from-green-600 hover:to-green-700', icon: 'bg-green-100 dark:bg-green-900', iconColor: 'text-green-600 dark:text-green-400' },
      { bg: 'from-indigo-500 to-indigo-600', hover: 'hover:from-indigo-600 hover:to-indigo-700', icon: 'bg-indigo-100 dark:bg-indigo-900', iconColor: 'text-indigo-600 dark:text-indigo-400' },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            文章分类
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            共 <span className="font-semibold text-blue-600 dark:text-blue-400">{categories.length}</span> 个分类
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoriesWithCount.map((category, index) => {
            const color = getCategoryColor(index);
            return (
              <Link
                key={category.name}
                href={`/categories/${category.name}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-transparent overflow-hidden relative">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 ${color.icon} rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors ${color.iconColor} group-hover:text-white`}>
                        {getCategoryIcon(index)}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                          {category.count}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                          篇文章
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors mb-2">
                      {category.name}
                    </h2>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                      <span className="text-sm">查看全部</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">最热分类</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {categoriesWithCount[0]?.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {categoriesWithCount[0]?.count} 篇文章
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">文章总数</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {categoriesWithCount.reduce((sum, cat) => sum + cat.count, 0)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  分布在 {categories.length} 个分类
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
