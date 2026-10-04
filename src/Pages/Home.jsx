import { useState, useLayoutEffect, useRef } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { slides } from "../lib/info";

import gsap from "gsap";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSlide = slides[currentPage];
  const CurrentSlide = currentSlide.component;

  const slideRef = useRef(null);
  const isAnimating = useRef(false);

  const changePage = (nextPage) => {
    if (isAnimating.current) return;

    if (nextPage < 0 || nextPage >= slides.length) return;
    if (nextPage === currentPage) {
      setMenuOpen(false);
      return;
    }

    isAnimating.current = true;

    gsap.to(slideRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentPage(nextPage);
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.fromTo(
        slideRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      );

      tl.fromTo(
        ".slide-content",
        {
          y: 15,
          x: 10,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.35",
      );

      tl.fromTo(
        ".slide-item",
        {
          y: 5,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.45",
      );
    }, slideRef);

    return () => ctx.revert();
  }, [currentPage]);

  return (
    <div className=" min-h-screen w-full ">
      {/* top fixed */}
      <div className="fixed top-2 left-0 right-0 px-5 z-40">
        <div className="flex items-center justify-between ">
          <div className="flex items-baseline justify-center gap-x-2">
            <span className="bg-Ccream h-3 w-3 outline-none"></span>
            <h2 className="text-Cgreen text-lg md:text-2xl font-semibold font-Playfair">
              Northstar
            </h2>
            <p className="font-Playfair text-Cfaded text-small  place-items-end">
              Advisory
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-1 md:gap-x-2">
            <button
              className="border border-Cgreen p-1.5 cursor-pointer"
              onClick={() => changePage(currentPage - 1)}
            >
              <HiOutlineArrowLongLeft className="  text-Cgreen" size={20} />
            </button>
            <button
              className="border border-Cgreen p-1.5 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <IoMenuSharp className="text-Cgreen" size={20} />
            </button>
            <div className="border border-Cgreen p-1.5">
              <p className="text-Cashy italic text-sm font-Playfair font-light ">
                p.{String(currentPage + 1).padStart(2, "0")} of{""}{" "}
                {String(slides.length).padStart(2, "0")}
              </p>
            </div>
            <button
              className="border border-Cgreen p-1.5 cursor-pointer"
              onClick={() => changePage(currentPage + 1)}
            >
              {" "}
              <HiOutlineArrowLongRight className="text-Cgreen" size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu */}
          <div className="absolute left-1/2 top-1/2 w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white">
            {/* Close */}
            <div className="flex items-center justify-between p-4">
              <p className="font-Playfair text-xl text-green-700 ">
                Table of <span className="text-Ccream">exhibit</span>
              </p>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-Ccream cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Navigation */}
            <div>
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMenuOpen(false);
                    changePage(index);
                  }}
                  className="w-full border-t border-Cfaded p-5 text-left hover:border-l-3 hover:border-Ccream hover:bg-Cfaded/40 hover:pl-2.5 hover:transition-all hover:duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-Cfaded text-xs uppercase">
                        {slide.section}
                      </p>

                      <h2 className="text-Ccream text-2xl font-Playfair">
                        {slide.title}
                      </h2>

                      <p className="mt-1 text-Cashy text-sm">
                        {slide.description}
                      </p>
                    </div>

                    <span className="text-Ccream text-2xl">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* bottom */}
      <div className="fixed bottom-2 w-full">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center justify-center gap-x-2">
            <span className="h-0.5 w-7 bg-Ccream block"></span>
            <p className="text-Cfaded font-Playfair text-small font-light ">
              {currentSlide.section}
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <p className="text-Cfaded font-Playfair text-small font-light">
              Design: {currentSlide.design}
            </p>
            <span className="h-0.5 w-7 bg-Ccream block"></span>
          </div>
        </div>
      </div>

      <div className="h-screen w-full " ref={slideRef}>
        <CurrentSlide />
      </div>
    </div>
  );
};

export default Home;
