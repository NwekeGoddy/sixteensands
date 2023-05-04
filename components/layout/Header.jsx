import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../images/icons/logo.png";
import Logo2 from "../../images/icons/sixteensandsfavicon.png";
import Image from "next/image";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header className="bg-white border-b-2 border-[#D3D3D3] w-full h-[92px] md:h-[105px] fixed left-0 right-0 z-20 font-raleway">
        <section className="max-w-screen-2xl m-auto px-6 sm:px-12 md:px-24 w-full h-[89px] md:h-[105px] ">
          <div className="py-5 md:py-8 top-0">
            <div className="hidden lg:flex flex-row justify-between items-center">
              <Link href="/">
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={Logo}
                    alt="Sixteen Sands Logo"
                    width={135}
                    height={36}
                  />
                </div>
              </Link>
              <div className="flex flex-row gap-20 justify-center items-center">
                <div>
                  <ul className="flex flex-row text-base gap-16 font-normal text-black">
                    <Link
                      href="/about"
                      className={
                        props.about
                          ? "fixed-underline-animation "
                          : "hover-underline-animation"
                      }
                    >
                      <li
                        className={
                          props.about ? "text-black/70 " : "text-black"
                        }
                      >
                        About Sixteen Sands
                      </li>
                    </Link>
                    <Link
                      href="/work"
                      className={
                        props.work
                          ? "fixed-underline-animation "
                          : "hover-underline-animation"
                      }
                    >
                      {" "}
                      <li
                        className={props.work ? "text-black/70 " : "text-black"}
                      >
                        Our Work
                      </li>
                    </Link>
                    <Link
                      href="/team"
                      className={
                        props.team
                          ? "fixed-underline-animation "
                          : "hover-underline-animation"
                      }
                    >
                      <li
                        className={props.team ? "text-black/70" : "text-black"}
                      >
                        Team
                      </li>
                    </Link>
                  </ul>
                </div>

                <Link href="/waitlist">
                  <div className="flex flex-row gap-6">
                    <button className="px-6 py-3  sm:px-6 sm:py-2 bg-black hover:bg-black/80 text-white text-base font-normal border border-[#CCCFE6] rounded-[3px]">
                      Join WaitList
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tablet */}
            <div className="flex items-center ">
              <div className={"" + (isOpen ? " block" : " hidden")}>
                <ul
                  data-aos="fade-left"
                  className="   z-10 bg-[#e0e5e1] absolute left-0 top-[90px] md:top-[105px] flex flex-col justify-center items-center  w-full mr-12 gap-8 py-8 text-scoolynblue text-base font-normal "
                >
                  <li>
                    <Link
                      href="/about"
                      className={
                        props.about ? "fixed-underline-animation " : "null"
                      }
                    >
                      About Sixteen Sands
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className={
                        props.work ? "fixed-underline-animation " : "null"
                      }
                    >
                      {" "}
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className={
                        props.team ? "fixed-underline-animation " : "null"
                      }
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full flex flex-row justify-between items-center">
                <Link href="/">
                  <Image
                    src={Logo2}
                    alt="Sixteen Sands Logo"
                    width={25}
                    height={27}
                    className="block lg:hidden"
                  />
                </Link>
                <div className="flex flex-row gap-3 sm:gap-5 items-center lg:hidden">
                  <Link href="/waitlist">
                    <button className="px-5 py-2 whitespace-nowrap  sm:px-4 sm:py-2 bg-black hover:bg-black/80 text-white text-sm font-normal border border-[#CCCFE6] rounded-[3px]">
                      Join WaitList
                    </button>
                  </Link>
                  <div
                    type="button"
                    onClick={handleIsOpen}
                    className={
                      "px-4 py-0 h-10 md:h-6 rounded-full flex lg:hidden items-center justify-end z-10 text-black bg-scoolynblue  w-full"
                    }
                  >
                    <button className=" flex items-center space-x-0 focus:outline-none ">
                      <div
                        className={
                          "w-4 sm:w-6  h-3 flex items-center justify-center relative"
                        }
                      >
                        <span
                          className={
                            "transform transition w-full h-[2px] bg-current absolute rounded-full" +
                            (isOpen
                              ? " translate-y-0 rotate-45"
                              : " -translate-y-1")
                          }
                        ></span>
                        <span
                          className={
                            "transform transition w-full h-[2px] bg-current absolute rounded-full" +
                            (isOpen
                              ? " translate-y-0 -rotate-45"
                              : " translate-y-1")
                          }
                        ></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
