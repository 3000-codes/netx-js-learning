import Link from "next/link";
export type Post = {
  id: number;
  title: string;
  slug: string;
}

export default function PostList({posts}:{posts: Post[]}) {
  
  return (
    <ul>
      {
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}