import React from "react";
import { useRouter } from "next/router";
export default function BlogDetails({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading Data........</h1>;
  }
  return (
    <>
      <h1>ID : {data.id}</h1>
      <h1>Title : {data.title}</h1>
      <h3>Description : {data.body}</h3>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paths = posts.slice(0, 4).map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
