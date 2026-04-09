"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-700 rounded" />;
  }

  return (
    <motion.div
      className="prose prose-lg dark:prose-invert max-w-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className } = props;
            const match = /language-(\w+)/.exec(className || "");
            
            if (match) {
              return (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }
            
            return <code className={className}>{children}</code>;
          },
          h1: ({ children }) => (
            <h1 id={String(children).toLowerCase().replace(/\s+/g, "-")}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 id={String(children).toLowerCase().replace(/\s+/g, "-")}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={String(children).toLowerCase().replace(/\s+/g, "-")}>
              {children}
            </h3>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}
