import React from "react";
import Image from "next/image";
import AboutImage from "../../images/aboutUsImage.jpg";
import NextPage from "../NextPage";

function Hero() {
  return (
    <section className="pt-[88px] lg:pt-[106px] pb-10 font-raleway">
      <Image
        className="m-auto object-cover  h-[300px] lg:h-fit lg:w-full"
        src={AboutImage}
        alt="About Us Image"
        placeholder="blur"
      />
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div className="mb-3 lg:mb-5">
          <h3 className="w-full font-bold text-xl  lg:text-[32px] text-black text-left mt-8 mb-4 lg:mt-16 lg:mb-8">
            At Sixteen Sands we use unmanned vehicles and satellite imagery to
            sense soil.
          </h3>
          <p className="w-full  font-medium text-sm lg:text-xl text-black text-left mb-2 lg:mb-3">
            Sixteen Sands is the premier provider of unmanned vehicle and
            satellite image-based agricultural data insights; Using
            Vision-Enabled AI techniques for the fusion of UAV and satellite
            imagery, we help inform sustainable farming practices.
          </p>

          <p className="w-full  font-medium text-sm lg:text-xl text-black text-left">
            We use state-of-the-art sensors to gather data on soil quality,
            moisture levels, and plant health, providing you with valuable
            insights that can help you make informed decisions about your crops.
          </p>
        </div>

        <div>
          <h3 className="w-full font-bold text-xl  lg:text-[32px] text-black text-left mt-8 mb-4 lg:mt-16 lg:mb-8">
            Smart Agriculture providing farmers with advanced tracking and
            reporting infrastructure.
          </h3>
          <p className="w-full  font-medium text-sm lg:text-xl text-black text-left mb-2 lg:mb-3">
            Assisting farmers with the necessary infrastructure to utilize
            advanced technologies for tracking, monitoring, automating, and
            analyzing their agricultural practices.
          </p>
          <p className="w-full  font-medium text-sm lg:text-xl text-black text-left">
            Using Unmanned Aerials (UAVs) & Convolutional Neural Networks (CNNs)
            to drive improvements in agricultural precision, increases in crop
            productivity, and a greater focus on targeted crop protection.
          </p>
        </div>
        <div className="mt-10">
          <NextPage title={"Our Work"} toLink={"work"} mobile />
        </div>
      </div>
    </section>
  );
}

export default Hero;
