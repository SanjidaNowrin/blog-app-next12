import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import DataFetcher from "../lib/fetcher";
import Author from "./_child/author";
export default function section3() {
  // fetch data
  const { data, isLoading, isError } = DataFetcher("api/popular");
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="container py-16 mx-auto md:px-20">
      <h1 className="py-12 text-4xl font-bold text-center">Most Popular</h1>
      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Post data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function Post({ data }) {
  const { id, subtitle, title, category, img, published, author, description } =
    data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image alt="banner" src={img || ""} width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center py-4 info">
        <div className="cat">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-orange-600 hover:text-orange-800">
              {category || ""}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {" "}
              - {published || ""}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl font-bold text-gray-800 md:text-4xl hover:text-gray-600">
              {title || ""}
            </a>
          </Link>
        </div>
        <p className="py-3 text-gray-500">{description || ""}</p>
        {author ? <Author {...author} /> : ""}
      </div>
    </div>
  );
}
