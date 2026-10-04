import React from "react";

const LetterSlide = () => {
  return (
    <section className="min-h-screen mx-auto overflow-hidden relative px-10 slide-content">
      <div className="  mx-auto w-full my-15">
        {/*  */}
        {/* Heading p text */}
        <div className="max-w-8xl flex flex-col gap-y-5 mx-auto ">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-y-3.5">
            <div className="flex flex-col gap-y-1.5">
              <div className="flex items-center justify-start gap-x-3 text-Ccream font-Montserrat">
                <span className="h-0.5 w-7 bg-Ccream block" />
                <p>Exhibit I</p>
              </div>
              <h2 className="text-Cgreen font-Playfair  text-6xl slide-item">
                A letter from the{" "}
                <span className="text-Ccream">partnership</span>.
              </h2>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <p className="text-Cgreen font-Montserrat tracking-wide lg:text-right text-md font-semibold">
                To the Board
              </p>
              <p className="text-Cashy font-Montserrat tracking-wide lg:text-right text-sm slide-item">
                From the Managing Partners Drafted · March MMXXVI Pages · 02 of
                09
              </p>
            </div>
          </div>
          <div className="bg-Cgreen w-full h-0.5 block" />
        </div>
        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
          <div className="flex flex-col gap-y-4 font-Montserrat text-md lg:text-xl lg:border-r border-Cashy lg:pr-2 text-Cgreen">
            <div>
              <p className="relative">
                <span className="float-left text-7xl leading-none text-Ccream font-Montserrat mr-3 slide-item">
                  T
                </span>
                document represents the partnership's considered view on where
                Linden & Hare should direct its energy over the coming three
                years. It is the product of nine months of deliberation,
                conversations with every senior practitioner in the firm, and an
                honest accounting of the headwinds we expect to navigate.
              </p>
            </div>
            <div>
              <p>
                Three priorities organise our thinking.{" "}
                <span className="font-semibold">First,</span> we will deepen the
                four practice areas where we hold genuine advantage.{" "}
                <span className="font-semibold">Second,</span> we will commit to
                a deliberate succession of partners through MMXXVIII.{" "}
                <span className="font-semibold">Third,</span> we will rebuild
                our institutional knowledge systems so that what one partner
                learns becomes what every partner knows.
              </p>
            </div>
            <div>
              <p>
                None of this is dramatic. It is, in our view, the right kind of
                unglamorous, and a long bet on the unfashionable proposition
                that fewer, better engagements remain the soundest foundation a
                firm of our character can stand on.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-y-2 mt-2 pl-3">
            <p className="text-Cgreen text-md font-Montserrat">
              The Managing Partners
            </p>
            <p className="text-Cfaded text-md font-Playfair">
              Linden & Hare Advisory
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSlide;
