import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import MeetTeamIntro from "@/components/team/MeetTeamIntro";
import { MemberData } from "../../../Data/memberdata";

import Vector2 from "../../../images/Vector2.png";
import { AiFillLinkedin } from "react-icons/ai";

function EachMember() {
  const router = useRouter();
  const { member } = router.query;

  return (
    <>
      <Header team />
      <section className="pt-[106px] pb-10 font-raleway">
        <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-16 mt-8 md:mt-16 lg:mt-32">
            <div className="w-full lg:w-4/12">
              <h3 className=" font-bold text-3xl  lg:text-4xl text-black lg:text-left mb-6">
                Meet our Team of Experts
              </h3>

              <div className="hidden md:block">
                <p className="font-medium text-sm lg:text-xl text-black text-left mb-4">
                  At Sixteen Sands, we&apos;re proud to have a team of experts
                  who are passionate about revolutionising the agriculture
                  industry. Our team includes engineers, data scientists, and
                  agricultural specialists who are committed to developing
                  cutting-edge technology that can help you optimize your crop
                  yields, reduce costs, and increase profitability.
                </p>

                <p className="font-medium text-sm lg:text-xl text-black text-left ">
                  At Sixteen Sands, we&apos;re committed to building a team
                  that&apos;s as innovative and forward-thinking as our
                  technology. We believe that our team&apos;s expertise and
                  passion for agriculture are what set us apart, and we&apos;re
                  excited to continue pushing the boundaries of what&apos;s
                  possible in agriculture.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-8/12">
              <Link href="/team">
                <Image src={Vector2} alt="Arrow" className="mb-5 rotate-180" />
              </Link>
              {MemberData.map((memberdata) => {
                if (memberdata.link === member) {
                  return (
                    <div
                      key={memberdata.id}
                      className="flex flex-col sm:flex-row gap-5 md:gap-10 md:p-5 md:border-2 md:border-[#575454] md:rounded-xl"
                    >
                      {/* <div className="flex flex-row md:flex-col gap-3 md:gap-0 items-center lg:items-start"> */}
                      <div className="">
                        <Image
                          src={memberdata.picture}
                          alt={`${memberdata.name} Picture`}
                          width={205}
                          height={199}
                          className="max-w-[205px]"
                        />
                        <div>
                          <h5 className="mt-5 font-bold text-xl">
                            {memberdata.name}
                          </h5>
                          <div className=" flex flex-row justify-between items-center w-full mt-2">
                            <div className="flex flex-row items-center gap-2">
                              <p className="italic text-[12px] md:text-sm">
                                Director
                              </p>
                              <Link
                                href={memberdata.linkedinLink}
                                className="w-full"
                              >
                                <AiFillLinkedin />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        {memberdata.brief.map((text) => {
                          return (
                            <p key={text} className="mb-5">
                              {text}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EachMember;
