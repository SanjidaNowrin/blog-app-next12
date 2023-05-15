import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./author";
import Spinner from "./spinner";
import Error from "./error";
import DataFetcher from "../../lib/fetcher";
export default function related() {
  const { data, isLoading, isError } = DataFetcher("api/posts");
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="pt-10">
      <h1 className="py-10 text-3xl font-bold">Related</h1>
      <div className="flex flex-col gap-10">
        {data.map((post, index) => (
          <Post data={post} key={index} />
        ))}
      </div>
    </section>
  );
}
function Post({ data }) {
  const { id, author, img, title, category, published } = data;
  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-start image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              alt="banner"
              src={img}
              className="rounded"
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600"> - {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        {author ? <Author {...author} /> : ""}
      </div>
    </div>
  );
}
