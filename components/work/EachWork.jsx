import React from "react";
import Image from "next/image";
import Work from "../../images/work1.jpg";

function EachWork({ title, brief }) {
  return (
    <div className="flex flex-col gap-8 my-20">
      <Image src={Work} alt="Our work" className="w-full" />
      <h3 className=" font-bold text-xl  lg:text-[32px] text-black text-left ">
        {title}
      </h3>
      <p className="font-medium text-sm lg:text-xl text-black text-left">
        {brief}
      </p>
    </div>
  );
}

export default EachWork;
