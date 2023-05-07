import React from "react";
import Image from "next/image";
import AboutImage from "../../images/aboutUsImage.jpg";
import NextPage from "../NextPage";

function Hero() {
  return (
    <section className="pt-[88px] lg:pt-[106px] pb-10 font-raleway">
      <Image className="m-auto object-cover  h-[300px] lg:h-fit lg:w-full" src={AboutImage} alt="About Us Image" placeholder="blur"/>
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div>
          <h3 className="w-full lg:w-6/12 font-bold text-xl  lg:text-[32px] text-black text-left mt-8 mb-4 lg:mt-16 lg:mb-8">
            At Sixteen Sands we use unmanned vehicles and satellite imagery to
            sense soil.
          </h3>
          <p className="w-full lg:w-6/12 font-medium text-sm lg:text-xl text-black text-left">
            Sixteen Sands is the premier provider of unmanned vehicle and
            satellite image-based agricultural data insights. Our innovative
            technology can help you optimise your crop yields, reduce costs, and
            increase profits. We use state-of-the-art sensors to gather data on
            soil quality, moisture levels, and plant health, providing you with
            valuable insights that can help you make informed decisions about
            your crops. Our technology provides you with precise and up-to-date
            information on soil and plant health, giving you an edge in
            decision-making.
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
