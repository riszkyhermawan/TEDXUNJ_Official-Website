import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const TitleMerch = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div>
        <div
        ref={ref1}
        className={`transition-opacity ease-in-out duration-700 ${
            isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        >
        <h1 className="font-artega hidden md:block text-white">OUR MERCHANDISE</h1>
        </div>
        <div
        ref={ref1}
        className={`transition-opacity ease-in-out duration-700 ${
            isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        >
        <h2 className="font-artega md:hidden text-white">OUR MERCHANDISE</h2>
        </div>

    </div>
  );
};

export default TitleMerch;
