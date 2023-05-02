import React, { useRef, useState } from "react";
import Image from "next/image";
import Work from "../../images/work1.jpg";
import EachWork from "./EachWork";
import NextPage from "../NextPage";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

function Hero() {
  return (
    <section className="pt-[88px] lg:pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div className="hidden md:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Autoplay, Navigation]}
            className=" mySwiper work"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 640px (sm)
              100: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
              // when window width is >= 768px (md)
              700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
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
        </div>

        <div className="block md:hidden">
          <div className="flex flex-col gap-4">
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />

            <EachWork
              title={"Business Header theme here with important messaging"}
              brief={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commo"
              }
            />
          </div>
        </div>
        <NextPage title={"Our Team"} toLink={"team"} />
      </div>
    </section>
  );
}

export default Hero;
