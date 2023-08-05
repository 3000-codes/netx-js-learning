This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## route groups 路由组

- 命名规则`(group-name)`的文件夹
- url 会忽略`group-name`，如`/(group-name)/page-name`会变成`/page-name`
- 可以为每个 route group 添加一个`layout.tsx`，用于包裹该 group 下的所有页面,从而实现多个根布局

## dynamic route 动态路由

- 命名规则`[param-name]`的文件夹
- url 会根据`param-name`的值变化，如`/page/[id]`会变成`/page/1`
- 与请求搭配使用：
  - 可以先请求好数据，再渲染页面
  - 多个重复请求（即使跨布局，跨页面）会合并成一个请求，减少请求次数

### 嵌套动态路由

| Route                            | Example       | Params                      |
| -------------------------------- | ------------- | --------------------------- |
| `app/pages/[...slug]/page.tsx`   | `/page/1/2/3` | `{ slug: ['1', '2', '3'] }` |
| `app/pages/[[...slug]]/page.tsx` | `/page/1/2/3` | `{ slug:['1', '2', '3'] }`  |
| `app/pages/[[...slug]]/page.tsx` | `/page`       | `{  }`                      |
