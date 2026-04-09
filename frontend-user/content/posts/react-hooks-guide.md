---
title: "React Hooks 完全指南"
excerpt: "全面了解 React Hooks 的使用方法和最佳实践，从基础的 useState 到高级的自定义 Hooks。"
date: "2024-01-14"
category: "React"
tags: ["React", "Hooks", "JavaScript", "前端开发"]
coverImage: "https://picsum.photos/800/400"
author: "Tech Blog Team"
---

# React Hooks 完全指南

React Hooks 改变了我们编写 React 组件的方式。本文将深入探讨各种 Hooks 的使用方法。

## useState - 状态管理

最基础也是最常用的 Hook：

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## useEffect - 副作用处理

处理副作用的强大工具：

```jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []); // 空依赖数组表示只在挂载时执行

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

## useCallback - 性能优化

避免不必要的函数重新创建：

```jsx
import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // 依赖数组为空，函数不会重新创建

  return <Child onClick={handleClick} />;
}
```

## useMemo - 计算优化

缓存计算结果：

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ items }) {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>Total: ${total}</div>;
}
```

## 自定义 Hooks

创建可复用的逻辑：

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

// 使用
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

## 最佳实践

1. **遵循 Hooks 规则**：只在顶层调用 Hooks
2. **合理使用依赖数组**：避免遗漏依赖
3. **避免过度优化**：不是所有地方都需要 useMemo/useCallback
4. **自定义 Hooks 命名**：以 "use" 开头

## 总结

React Hooks 让函数组件拥有了类组件的所有能力，同时代码更加简洁和可复用。掌握 Hooks 是现代 React 开发的必备技能。
