import React from "react";
import Image from "next/image";
import Link from "next/link";
import MeetTeamIntro from "./MeetTeamIntro";

import Abayomi from "../../images/abayomi.jpg";
import Daniel from "../../images/daniel.jpg";
import Belen from "../../images/belen.jpg";
import Oscar from "../../images/oscar.jpg";
import Vector2 from "../../images/Vector2.png";
import { AiFillLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <section className="pt-[106px] pb-10 font-raleway">
      <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32 mt-5 md:mt-10 lg:mt-20">
          <MeetTeamIntro />
          <div className="grid grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-5 lg:gap-y-10">
            <div className="w-36 md:w-[205px] max-w-[205px]">
              <Image
                src={Abayomi}
                alt="Abayomi Awobokun Picture"
                width={205}
                height={199}
                className="w-36 md:w-[205px] max-w-[205px]"
                placeholder="blur"
              />
              <h5 className="mt-3 lg:mt-5 font-bold text-sm md:text-xl">
                Abayomi Awobokun
              </h5>
              <div className=" flex flex-row justify-between items-center w-full mt-1 lg:mt-2">
                <div className="flex flex-row items-center gap-2">
                  <p className="italic text-[12px] md:text-sm">Director</p>
                  <Link
                    href="https://www.linkedin.com/in/otaobayomi?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAbu8ooBycaUN8IyKDVxcJ4154SOKEggkAY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BikOCBGj2SZ%2BLV5eerwchjQ%3D%3D
"
                    className="w-full"
                  >
                    <AiFillLinkedin />
                  </Link>
                </div>
                <Link href="/team/@abayomi-awobokun">
                  <Image
                    src={Vector2}
                    alt="Short Arrow"
                    width={44}
                    height={8}
                    className="h-2"
                    placeholder="blur"
                  />
                </Link>
              </div>
            </div>

            <div className="w-36 md:w-[205px] max-w-[205px]">
              <Image
                src={Daniel}
                alt="Daniel L Ayuba Picture"
                width={205}
                height={199}
                className="w-36 md:w-[205px] max-w-[205px]"
                placeholder="blur"
              />
              <h5 className="mt-3 lg:mt-5 font-bold text-sm md:text-xl">
                Daniel L Ayuba
              </h5>
              <div className=" flex flex-row justify-between items-center w-full mt-1 lg:mt-2">
                <div className="flex flex-row items-center gap-2">
                  <p className="italic text-[12px] md:text-sm">Director</p>
                  <Link
                    href="https://www.linkedin.com/in/mrkleffy?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAApRZSgBf0FEHlQdOTc-Q17DKykat9G6V-c&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BCft8uW1VTTKADInvIBgFVg%3D%3D
"
                    className="w-full"
                  >
                    <AiFillLinkedin />
                  </Link>
                </div>
                <Link href="/team/@daniel-ayuba">
                  <Image
                    src={Vector2}
                    alt="Short Arrow"
                    width={44}
                    height={8}
                    className="h-2"
                    placeholder="blur"
                  />
                </Link>
              </div>
            </div>

            <div className="w-36 md:w-[205px] max-w-[205px]">
              <Image
                src={Oscar}
                alt="Dr Oscar Mendez Picture"
                width={205}
                height={199}
                className="w-36 md:w-[205px] max-w-[205px]"
                placeholder="blur"
              />
              <h5 className="mt-3 lg:mt-5 font-bold text-sm md:text-xl">
                Dr Oscar Mendez
              </h5>
              <div className=" flex flex-row justify-between items-center w-full mt-1 lg:mt-2">
                <div className="flex flex-row items-center gap-2">
                  <p className="italic text-[12px] md:text-sm">Director</p>
                  <Link
                    href="https://www.linkedin.com/in/oscarmendez89?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAstCiABJ8lnlumbMaWBLGM1Ylue7Xbd8ok&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BmM7Qk6N5Rb2KlN7Zx5qf1w%3D%3D
"
                    className="w-full"
                  >
                    <AiFillLinkedin />
                  </Link>
                </div>
                <Link href="/team/@oscarmendez">
                  {" "}
                  <Image
                    src={Vector2}
                    alt="Short Arrow"
                    width={44}
                    height={8}
                    className="h-2"
                    placeholder="blur"
                  />
                </Link>
              </div>
            </div>

            <div className="w-36 md:w-[205px] max-w-[205px]">
              <Image
                src={Belen}
                alt="Belen Marti-Cardona Picture"
                width={205}
                height={199}
                className="w-36 md:w-[205px] max-w-[205px]"
                placeholder="blur"
              />
              <h5 className="mt-3 lg:mt-5 font-bold text-sm md:text-xl">
                Belen Marti-Cardona
              </h5>
              <div className=" flex flex-row justify-between items-center w-full mt-1 lg:mt-2">
                <div className="flex flex-row items-center gap-2">
                  <p className="italic text-[12px] md:text-sm">Director</p>
                  <Link
                    href="https://www.linkedin.com/in/belen-marti-cardona-rsandwater?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAATftWQB7-iu0J4UP9xfz_nt17NqYhWGXeg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BF38jYa59TmGh71V%2BTJ571Q%3D%3D"
                    className="w-full"
                  >
                    <AiFillLinkedin />
                  </Link>
                </div>
                <Link href="/team/@belen-marti-cardona">
                  {" "}
                  <Image
                    src={Vector2}
                    alt="Short Arrow"
                    width={44}
                    height={8}
                    className="h-2"
                    placeholder="blur"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <p className="font-medium text-sm lg:text-xl text-black text-left mb-4">
              At Sixteen Sands, we&apos;re proud to have a team of experts who
              are passionate about revolutionising the agriculture industry. Our
              team includes engineers, data scientists, and agricultural
              specialists who are committed to developing cutting-edge
              technology that can help you optimize your crop yields, reduce
              costs, and increase profitability.
            </p>

            <p className="font-medium text-sm lg:text-xl text-black text-left ">
              At Sixteen Sands, we&apos;re committed to building a team
              that&apos;s as innovative and forward-thinking as our technology.
              We believe that our team&apos;s expertise and passion for
              agriculture are what set us apart, and we&apos;re excited to
              continue pushing the boundaries of what&apos;s possible in
              agriculture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
