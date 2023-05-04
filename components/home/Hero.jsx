import React, { useRef, useState } from "react";
import Hero1 from "../../images/Hero1.png";
import Hero2 from "../../images/Hero2.png";
import Hero3 from "../../images/Hero3.png";
import EachHero from "./EachHero";
import NextPage from "../NextPage";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Keyboard, Pagination, Navigation, Autoplay } from "swiper";

function Hero() {
  return (
    <section className="pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Keyboard, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <EachHero
              title={"Precision agriculture made easy with Sixteen Sands"}
              brief={
                "Our technology provides you with precise and up-to-date information on soil and plant health, giving you an edge indecision-making."
              }
              img={Hero3}
              start={"Get started"}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <EachHero
              title={"Experience the power of data-driven agriculture"}
              brief={
                "With our data insights, you can optimize your crop management and reduce waste, leading to increased efficiency and profitability."
              }
              img={Hero2}
              start={"Get started"}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <EachHero
              title={"Maximize your crop yields with Sensor technology"}
              brief={
                "Get the most out of your land with our soil and plant health insights and Revolutionise your farming practices with our cutting-edge technology"
              }
              img={Hero1}
              start={"Get started"}
            />
          </SwiperSlide>
        </Swiper>

        <NextPage title={"About Us"} toLink={"about"} />
      </div>
    </section>
  );
}

export default Hero;
