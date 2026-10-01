import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const rdn = [
  { n: "1", p: "1p" },
  { n: "2", p: "2p" },
  { n: "3", p: "3p" },
  { n: "4", p: "4p" },
  { n: "5", p: "5p" },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const currentContent = rdn[currentPage];

  return (
    <div className="bg-Cgreen min-h-screen w-full">
      {/* top fixed */}
      <div className="fixed inset-0 top-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <span></span>
            <h2>Northstar</h2>
            <p>Advisory</p>
          </div>
          <div className="flex items-center justify-center">
            <BiLeftArrow
              onClick={() => setCurrentPage((p) => (p > 0 ? p - 1 : p))}
            />
            <MenuIcon />
            <p>p.....</p>
            <BiRightArrow
              onClick={() =>
                setCurrentPage((p) => (p < rdn.length - 1 ? p + 1 : p))
              }
            />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="fixed bottom-2 w-full">
        <div className="flex items-center justify-between">
          <div>
            <span></span>
            <p>cover</p>
          </div>
          <div>
            <p>Design:</p>
            <span></span>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full text-8xl text-center flex flex-col">
        <p>0{currentPage + 1}/05</p>
        <span> {currentContent.n}</span>
        <span>{currentContent.p}</span>
      </div>
    </div>
  );
};

export default Home;
