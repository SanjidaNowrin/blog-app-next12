import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import DataFetcher from "../lib/fetcher";

export default function section1() {
  // fetch data
  const { data, isLoading, isError } = DataFetcher("api/trending");
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }

  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper autoplay={{ delay: 2000 }} loop={true} slidesPerView={1}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, subtitle, title, category, img, published, author, description } =
    data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image alt="banner" src={img || "image"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="cat">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "unknown"}
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title || ""}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || ""}</p>
        {author ? <Author {...author} /> : ""}
      </div>
    </div>
  );
}
