import PostList, { Post } from "./blog/postList";

export default function Home() {
  const posts: Post[] = Array.from({length: 10}, (_, i) => ({
    id: i,
    title: `Post ${i}`,
    slug: `post-${i}`
  }));
  return (
    <div>
      <h1 className={"text-4xl text-orange-600"}>
        main page
      </h1>
      <PostList posts={posts} />
    </div>
  )
}
