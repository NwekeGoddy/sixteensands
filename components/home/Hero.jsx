import React, { useRef, useState } from "react";
import Image from "next/image";
import Hero1 from "../../images/Hero1.png";
import Hero2 from "../../images/Hero2.png";
import Hero3 from "../../images/Hero3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

function Hero() {
  return (
    <section className="pt-[106px]">
      <div className="border-t-2 border-[#D3D3D3]">
        <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
            autoplay={{ delay: 1000 }}

          >
            <SwiperSlide>
              <div className="flex flex-row items-center justify-between gap-10">
                <div>
                  <h3>Hi there</h3>
                </div>
                <div>
                  <Image src={Hero1} alt="Hero 1" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;
