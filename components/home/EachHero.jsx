import React from "react";
import Image from "next/image";
import Link from "next/link";

function EachHero({ title, brief, img, start }) {
  return (
    <div className="mt-14 flex flex-col-reverse lg:flex-row items-center justify-between  gap-10">
      <div className="lg:w-6/12 flex flex-col items-start justify-center">
        <h3 className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-6 lg:mb-8 text-left">
          {title}
        </h3>
        <p className="font-medium text-base lg:text-xl text-[#6F6F6F] text-left mb-5 lg:mb-10">
          {brief}
        </p>

        <Link href="/waitlist">
          <div className="font-bold text-black text-base lg:text-xl flex flex-row gap-2 items-center ">
            <p>{start}</p>
            <p className="">→</p>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-8/12 lg:w-1/2">
        <Image src={img} alt="Hero 1" className="w-1/2" />
      </div>
    </div>
  );
}

export default EachHero;
