import React from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "../images/Vector.png";

function NextPage({ title, toLink, mobile }) {
  return (
    <Link href={`/${toLink}`}>
      <div
        className={
          "flex flex-col items-end justify-end gap-0" +
          (mobile ? null : "hidden")
        }
      >
        <p className="text-xs md:text-sm lg:text-lg pr-5">{title}</p>
        <Image className= {(mobile ? "w-[220px] lg:w-fit h-2" : null)} src={Vector} alt="arrow next page" />
      </div>
    </Link>
  );
}

export default NextPage;
