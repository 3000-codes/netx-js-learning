import Link from "next/link";
import PostList, { Post } from "./blogs/postList";

export default function Home() {
  const posts: Post[] = Array.from({length: 10}, (_, i) => ({
    id: i,
    title: `Post ${i}`,
    slug: `post-${i}`
  }));
  // throw new Error("test error");
  return (
    <div>
      <h1 className={"text-4xl text-orange-600"}>
        main page<br/>
        <Link href={"/dashboard"}>dashboard</Link>
      </h1>
      <PostList posts={posts} />
    </div>
  )
}
