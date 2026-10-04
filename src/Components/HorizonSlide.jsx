import { horizonSlideInfo } from "../lib/info";
import { FaPlus } from "react-icons/fa6";

const HorizonSlide = () => {
  return (
    <section className="min-h-screen mx-auto overflow-hidden relative px-10 slide-content">
      <div className="mx-auto my-15 w-full">
        {/* Header */}
        <div className="max-w-8xl flex flex-col gap-y-5 mx-auto ">
          <div className="flex flex-col  justify-between  gap-y-3.5">
            <div className="flex flex-col gap-y-1.5">
              {/* Exhibit text */}
              <div className="flex items-center justify-start gap-x-3 text-Ccream font-Montserrat">
                <span className="h-0.5 w-7 bg-Ccream block" />
                <p>Exhibit III</p>
              </div>
              <h2 className="text-Cgreen font-Playfair  text-4xl lg:text-6xl italic font-light slide-item">
                The three <span className="text-Ccream">horizons</span>.
              </h2>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <p className="font-Montserrat text-Cashy text-sm">
                A sequenced plan, with each year's priorities chosen to enable
                the next. The intent is not to do more, but to do the right
                thing in the right order.
              </p>
            </div>
          </div>
          <div className="bg-Cgreen w-full h-0.5 block" />
        </div>
        {/* Content */}
        <div className="my-10 flex flex-col lg:flex-row gap-y-4 gap-x-6">
          {horizonSlideInfo.map((line, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-y-4 lg:nth-of-type-[2]:border-r lg:nth-of-type-[2]:border-l border-Cashy px-4"
              >
                <div className="flex gap-x-2 items-baseline">
                  <span className="italic text-Cgreen text-4xl font-Playfair font-light">
                    {line.number}
                  </span>
                  <p className="text-Ccream text-sm tracking-wide ">
                    {line.year}
                  </p>
                </div>
                <h4 className="text-Cgreen text-xl font-Playfair slide-item">
                  {line.name}
                </h4>
                <p className="text-Cfaded text-md font-Montserrat border-b border-Cashy pb-4">
                  {line.info}
                </p>
                <div>
                  {line.list.map((item, i) => (
                    <div className="flex items-center gap-x-2 " key={i}>
                      <FaPlus size={10} className="text-Ccream" />
                      <p className="text-Cashy font-Montserrat">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-Cashy mt-2 pt-3">
                  <p className="text-Cfaded text-sm  font-Montserrat">
                    INVESTMENT
                  </p>
                  <p className="text-Cgreen font-Playfair">{line.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizonSlide;
