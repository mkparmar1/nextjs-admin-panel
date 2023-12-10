import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home({ posts }) {
  const router = useRouter();
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((data, index) => {
          return (
            <li>
              <Link href={`/blog/${data.id}`}>
                {data.id} - {data.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts: posts.slice(0, 4),
    },
  };
}
