import React, { useRef, useState } from "react";
import Image from "next/image";
import Work from "../../images/work1.jpg";
import EachWork from "./EachWork";
import NextPage from "../NextPage";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

function Hero() {
  return (
    <section className="pt-[88px] lg:pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[ Autoplay]}
          className="mySwiper work"
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
          </SwiperSlide>
        </Swiper>
        <NextPage title={"Our Team"} toLink={"team"} />
      </div>
    </section>
  );
}

export default Hero;
