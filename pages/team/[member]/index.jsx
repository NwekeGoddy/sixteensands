import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import MeetTeamIntro from "@/components/team/MeetTeamIntro";
import { MemberData } from "../../../Data/memberdata";

import Vector2 from "../../../images/Vector2.png";

function EachMember() {
  const router = useRouter();
  const { member } = router.query;

  return (
    <>
      <Header team />
      <section className="pt-[106px] pb-10 font-raleway">
        <div className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full">
          <div className="flex flex-col lg:flex-row gap-16 mt-16 lg:mt-32">
            <div className="hidden md:block">
              <MeetTeamIntro />
            </div>
            <div className="w-full md:w-8/12">
              <Link href="/team">
                <Image src={Vector2} alt="Arrow" className="mb-5 rotate-180" />
              </Link>
              {MemberData.map((memberdata) => {
                if (memberdata.link === member) {
                  return (
                    <div
                      key={memberdata.id}
                      className="flex flex-row gap-10 md:p-5 md:border-2 md:border-[#575454] md:rounded-xl"
                    >
                      <div className="">
                        <Image
                          src={memberdata.picture}
                          alt={`${memberdata.name} Picture`}
                          width={205}
                          height={199}
                          className="max-w-[205px]"
                        />
                        <h5 className="mt-5 font-bold text-xl">
                          {memberdata.name}
                        </h5>
                        <div className=" flex flex-row justify-between items-center w-full mt-2">
                          <p className="italic text-sm ">Director</p>
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
