import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import getPost from "../lib/helper";
import DataFetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section2() {
  // fetch data
  const { data, isLoading, isError } = DataFetcher("api/posts");
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  console.log(data);
  return (
    <section className="container py-10 mx-auto md:px-20">
      <h1 className="py-12 text-4xl font-bold text-center">Latest Posts</h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post data={value} key={value.id} />
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, subtitle, title, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              className="rounded"
              alt="banner"
              src={img || `/posts/${id}`}
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center py-4 info">
        <div className="cat">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        <p className="py-3 text-gray-500">{subtitle}</p>
        {author ? <Author {...author} /> : ""}
      </div>
    </div>
  );
}
