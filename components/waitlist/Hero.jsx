import React from "react";
import Image from "next/image";
import WaitListImage from "../../images/waitlistImage.png";
import WaitListMobile from "../../images/waitlistMobile.png";

function Hero() {
  return (
    <section className="pt-[88px] lg:pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div className="flex flex-col lg:flex-row items-center bg-[#F3F3F3] rounded-3xl my-8 lg:my-16">
          <div className="w-full lg:w-1/2">
            <Image
              src={WaitListImage}
              alt="Waitlist Image"
              className="hidden lg:block h-full w-full"
            />

            <Image
              src={WaitListMobile}
              alt="Waitlist Image"
              className="block lg:hidden h-full w-full"
            />
          </div>
          <div className="p-10 lg:p-0  w-full lg:w-1/2 mx-16 flex flex-col gap-8 lg:gap-12">
            <h2 className="text-3xl xl:text-4xl 2xl:text-6xl text-black font-bold">
              Ready to drive your yield with insights?
            </h2>
            <p className="text-sm lg:text-2xl text-[#6C6B6B] mb-12">
              Grow, Scale and maximise productivity with our solutions
            </p>

            <div className="flex flex-row border-black border justify-between rounded-full bg-white">
              <input
                className="outline-0 rounded-l-full py-3 px-4 lg:py-4 lg:px-5 text-[8px] sm:text-xs md:text-sm lg:text-base text-black"
                type="email"
                name=""
                id=""
                placeholder="Enter email here"
              />
              <button className="whitespace-nowrap text-white bg-black rounded-full py-3 px-4 lg:px-7 lg:py-4 text-[8px] sm:text-xs md:text-sm lg:text-base">
                Join our waitList
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
