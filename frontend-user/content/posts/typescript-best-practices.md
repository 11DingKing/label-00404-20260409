---
title: "TypeScript 最佳实践"
excerpt: "学习 TypeScript 的最佳实践，提升代码质量和开发效率，避免常见陷阱。"
date: "2024-01-13"
category: "TypeScript"
tags: ["TypeScript", "JavaScript", "类型系统", "最佳实践"]
coverImage: "https://picsum.photos/800/400"
author: "Tech Blog Team"
---

# TypeScript 最佳实践

TypeScript 为 JavaScript 带来了强大的类型系统。本文分享一些 TypeScript 开发的最佳实践。

## 使用严格模式

在 `tsconfig.json` 中启用严格模式：

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

## 类型推断 vs 显式类型

优先使用类型推断：

```typescript
// ❌ 不推荐
const count: number = 0;
const name: string = "John";

// ✅ 推荐
const count = 0;
const name = "John";

// ✅ 在必要时使用显式类型
const users: User[] = [];
```

## 接口 vs 类型别名

两者都可以使用，但有一些区别：

```typescript
// 接口 - 可以扩展
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

// 类型别名 - 更灵活
type ID = string | number;
type User = {
  id: ID;
  name: string;
};
```

## 泛型的使用

泛型让代码更加灵活和可复用：

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

// 使用
const userResponse: Response<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success",
};
```

## 联合类型和类型守卫

```typescript
type Status = "loading" | "success" | "error";

interface LoadingState {
  status: "loading";
}

interface SuccessState {
  status: "success";
  data: string;
}

interface ErrorState {
  status: "error";
  error: string;
}

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
  // 类型守卫
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return state.data; // TypeScript 知道这里有 data
    case "error":
      return state.error; // TypeScript 知道这里有 error
  }
}
```

## 实用工具类型

TypeScript 提供了许多实用的工具类型：

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - 所有属性变为可选
type PartialUser = Partial<User>;

// Pick - 选择特定属性
type UserPreview = Pick<User, "id" | "name">;

// Omit - 排除特定属性
type UserWithoutEmail = Omit<User, "email">;

// Required - 所有属性变为必需
type RequiredUser = Required<PartialUser>;

// Readonly - 所有属性变为只读
type ReadonlyUser = Readonly<User>;
```

## 避免使用 any

尽量避免使用 `any`，使用更具体的类型：

```typescript
// ❌ 不推荐
function process(data: any) {
  return data;
}

// ✅ 推荐
function process<T>(data: T): T {
  return data;
}

// 或使用 unknown
function process(data: unknown) {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return data;
}
```

## 总结

TypeScript 的类型系统非常强大，合理使用可以大大提升代码质量和开发体验。记住：类型系统是你的朋友，不是敌人。
