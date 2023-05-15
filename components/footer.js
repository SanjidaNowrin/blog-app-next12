import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from "./_child/newsLetter";

export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLetter />
      <div className="container flex justify-center py-12 mx-auto">
        <div className="py-5">
          <div className="flex justify-center gap-6">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright @2022 all rights reserved
          </p>
          <p className="text-center text-gray-400">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
