import React from "react";

const HomeSlide = () => {
  return (
    <section className="min-h-screen mx-auto overflow-hidden relative px-10 slide-content">
      <div className="  mx-auto w-full my-15">
        {/* Heading p text */}
        <div className="max-w-8xl flex flex-col gap-y-5 mx-auto ">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1 text-sm text-Cashy font-Montserrat">
              <p>
                Linden & Hare{" "}
                <span className="text-Cgreen font-semi-bold text-xl font-Playfair">
                  Advisory
                </span>
              </p>
              <p>Strategic Practice Group</p>
            </div>
            <div className="flex flex-col gap-y-2 text-sm text-Cashy font-Montserrat text-right">
              <p className="text-Cgreen font-Playfair text-xl">Confidential</p>
              <p>For internal Board distribution</p>
            </div>
          </div>
          <div className="bg-Cgreen w-full h-0.5 block" />
        </div>

        {/* content */}
        <div className="my-18 flex flex-col gap-y-8">
          <div className="flex justify-center items-center w-1/4 gap-x-2.5">
            <span className="h-0.5 w-7 bg-Ccream block"></span>
            <p className="text-Ccream">Strategic Plan</p>
            <span className="h-0.5 w-7 bg-Ccream block"></span>
          </div>
          <h2 className="font-Playfair text-6xl lg:text-9xl text-Cgreen font-light slide-item">
            A <span className="text-Ccream">considered</span>
            <br /> path forward.
          </h2>
          <p className="text-xl font-Playfair  lg:w-1/3 text-Cashy">
            Three-year strategic plan for the period MMXXVI to MMXXVIII,
            prepared by the partnership for the Board of Directors.
          </p>
          <div className="slide-item">
            <button className="text-left border-b border-black  w-fit p-3 text-md  font-Montserrat tracking-wider  hover:text-Ccream hover:border-Ccream hover:transition-all hover:duration-300 cursor-pointer hover:scale-90 transition-transform duration-300">
              BEGIN READING
            </button>
          </div>
        </div>

        {/* footer */}
        <div>
          <div className="bg-Cgreen w-full h-0.5 block rounded-full" />
          <div className="grid grid-cols-2 lg:grid-cols-4 my-2">
            <div className="flex flex-col items-start gap-y-1.5">
              <p className="text-Cfaded text-sm font-Montserrat tracking-wider">
                Prepared by
              </p>
              <p className="text-Cgreen font-Playfair text-md">
                <span className="text-Ccream">Linden</span> & Hare
              </p>
            </div>
            <div className="flex flex-col items-start gap-y-1.5">
              <p className="text-Cfaded text-sm font-Montserrat tracking-wider">
                Period
              </p>
              <p className="text-Cgreen font-Playfair text-md">
                MMXXVI to MMXXVIII
              </p>
            </div>
            <div className="flex flex-col items-start gap-y-1.5">
              <p className="text-Cfaded text-sm font-Montserrat tracking-wider">
                Classification
              </p>
              <p className="text-Cgreen font-Playfair text-md">
                Board confidential
              </p>
            </div>
            <div className="flex flex-col items-start gap-y-1.5">
              <p className="text-Cfaded text-sm font-Montserrat tracking-wider">
                Issue
              </p>
              <p className="text-Cgreen font-Playfair text-md">No. 03</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlide;
