import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/author";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import DataFetcher from "../lib/fetcher";

export default function section4() {
  // fetch data
  const { data, isLoading, isError } = DataFetcher("api/posts");
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="container py-16 mx-auto md:px-20">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="py-12 text-4xl font-bold text-center">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[1] ? <Post data={data[1]} /> : ""}
            {data[2] ? <Post data={data[2]} /> : ""}
            {data[3] ? <Post data={data[3]} /> : ""}
          </div>
        </div>
        <div className="item">
          <h1 className="py-12 text-4xl font-bold text-center">Category</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[4] ? <Post data={data[4]} /> : ""}
            {data[5] ? <Post data={data[5]} /> : ""}
            {data[3] ? <Post data={data[3]} /> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, subtitle, title, category, img, published, author } = data;
  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-start image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              alt="banner"
              src={img || ""}
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
            <a className="text-orange-600 hover:text-orange-800">
              {category || ""}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {" "}
              - {published || ""}{" "}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || ""}
            </a>
          </Link>
        </div>
        {author ? <Author {...author} /> : ""}
      </div>
    </div>
  );
}
