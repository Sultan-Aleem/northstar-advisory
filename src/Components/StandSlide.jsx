import { standList, standRev } from "../lib/info";

const StandSlide = () => {
  return (
    <section className="min-h-screen mx-auto overflow-hidden relative px-10 slide-content">
      <div className="mx-auto my-15 w-full">
        {/* Header */}
        <div className="max-w-8xl flex flex-col gap-y-5 mx-auto ">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-y-3.5">
            <div className="flex flex-col gap-y-1.5">
              {/* Exhibit text */}
              <div className="flex items-center justify-start gap-x-3 text-Ccream font-Montserrat">
                <span className="h-0.5 w-7 bg-Ccream block" />
                <p>Exhibit II</p>
              </div>
              <h2 className="text-Cgreen font-Playfair  text-4xl lg:text-6xl italic font-light slide-item">
                Where we <span className="text-Ccream">stand</span>, plainly.
              </h2>
            </div>
            <div className="flex flex-col w-1/2 lg:w-1/3 border-l border-Cfaded pl-2.5">
              <p className="font-Montserrat text-Cashy text-lg slide-item">
                A reading of the partnership's position at the close of fiscal
                year MMXXV, against the four metrics we have agreed to be
                measured by.
              </p>
            </div>
          </div>
          <div className="bg-Cgreen w-full h-0.5 block" />
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-15 gap-y-6 my-10">
          <div className="bg-Cfaded/50 h-full w-full flex flex-col justify-between px-6 py-5 gap-y-24">
            {/* top */}
            <div className="flex flex-col gap-y-3">
              <p className="text-Ccream text-small font-Montserrat">
                Figure 2.1 · Revenue per partner
              </p>
              <p className="text-Cgreen text-xl font-Playfair font-light slide-item">
                Revenue per <span className="text-Ccream">partner</span>,
                five-year trend.
              </p>
            </div>
            {/* bottom */}
            <div className=" flex flex-col gap-y-5">
              <div className="flex items-center justify-between border-b border-Cfaded">
                {standRev.map((line, i) => {
                  return (
                    <div className="flex flex-col gap-y-2 pb-5">
                      <p className="text-black">{line.value}</p>
                      <p className="text-Cashy">{line.year}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-Cashy text-sm font-Montserrat">
                Source · Internal P&L, audited · Year-end figures
              </p>
            </div>
          </div>
          <div>
            {standList.map((line, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-y-1.5 border-b border-Cashy py-5 last-of-type:border-none slide-item"
                >
                  <span className="text-Ccream text-sm font-Montserrat">
                    {line.number}
                  </span>
                  <p className="text-Cgreen text-xl font-Playfair font-light">
                    {line.name}
                  </p>
                  <p className="text-Cashy font-Montserrat">{line.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandSlide;
