import React from "react";
import Image from "next/image";
import Abayomi from "../../images/abayomi.jpg";
import Daniel from "../../images/daniel.jpg";
import Belen from "../../images/belen.jpg";
import Oscar from "../../images/oscar.jpg";
import Vector2 from "../../images/Vector2.png";

function Hero() {
  return (
    <section className="pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div className="flex flex-col lg:flex-row gap-32 mt-16 lg:mt-32">
          <div className="w-4/12">
            <h3 className=" font-bold text-xl  lg:text-4xl text-black text-left mb-6">
              Meet our Team of Experts
            </h3>
            <p className="font-medium text-sm lg:text-xl text-black text-left mb-4">
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
          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <div className="">
                <Image src={Abayomi} alt="Abayomi Awobokun Picture" width={205} height={199} className="max-w-[205px]"/>
                <h5 className="mt-5 font-bold text-xl">Abayomi Awobokun</h5>
                <div className=" flex flex-row justify-between items-center w-full mt-2">
                    <p className="italic text-sm ">Director</p>
                    <Image src={Vector2} alt="Short Arrow" width={44} height={8} className="h-2"/>
                </div>
            </div>
           
            <div className="">
                <Image src={Daniel} alt="Daniel L Ayuba Picture" width={205} height={199} className="max-w-[205px]"/>
                <h5 className="mt-5 font-bold text-xl">Daniel L Ayuba</h5>
                <div className=" flex flex-row justify-between items-center w-full mt-2">
                    <p className="italic text-sm ">Director</p>
                    <Image src={Vector2} alt="Short Arrow" width={44} height={8} className="h-2"/>
                </div>
            </div>

            <div className="">
                <Image src={Oscar} alt="Dr Oscar Mendez Picture" width={205} height={199} className="max-w-[205px]"/>
                <h5 className="mt-5 font-bold text-xl">Dr Oscar Mendez</h5>
                <div className=" flex flex-row justify-between items-center w-full mt-2">
                    <p className="italic text-sm ">Director</p>
                    <Image src={Vector2} alt="Short Arrow" width={44} height={8} className="h-2"/>
                </div>
            </div>


            <div className="">
                <Image src={Belen} alt="Belen Marti-Cardona Picture" width={205} height={199} className="max-w-[205px]"/>
                <h5 className="mt-5 font-bold text-xl">Belen Marti-Cardona</h5>
                <div className=" flex flex-row justify-between items-center w-full mt-2">
                    <p className="italic text-sm ">Director</p>
                    <Image src={Vector2} alt="Short Arrow" width={44} height={8} className="h-2"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
