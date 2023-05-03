import React from "react";

function Hero() {
  return (
    <section className="pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div className="flex flex-row justify-between ">
          <div>
            <h3 className=" font-bold text-xl  lg:text-[32px] text-black text-left ">
              Meet our Team of Experts
            </h3>
            <p className="font-medium text-sm lg:text-xl text-black text-left">
              At Sixteen Sands, we&apos;re proud to have a team of experts who
              are passionate about revolutionising the agriculture industry. Our
              team includes engineers, data scientists, and agricultural
              specialists who are committed to developing cutting-edge
              technology that can help you optimize your crop yields, reduce
              costs, and increase profitability.
            </p>

            <p className="font-medium text-sm lg:text-xl text-black text-left">
              At Sixteen Sands, we&apos;re committed to building a team
              that&apos;s as innovative and forward-thinking as our technology.
              We believe that our team&apos;s expertise and passion for
              agriculture are what set us apart, and we&apos;re excited to
              continue pushing the boundaries of what&apos;s possible in
              agriculture.
            </p>
          </div>
          <div>Images or something</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
