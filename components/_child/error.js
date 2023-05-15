import Image from "next/image";

export default function error() {
  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold text-orange-600 py-10">
        Something Went Wrong
        <Image
          src={"/images/not_found.png"}
          width={400}
          height={400}
          alt="error image"
        ></Image>
      </h1>
    </div>
  );
}
