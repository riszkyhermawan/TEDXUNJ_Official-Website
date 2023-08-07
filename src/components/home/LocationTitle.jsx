import title from "../../assets/img/locationTitle.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const LocationTitle = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-fit h-fit flex-col justify-start items-start inline-flex relative">
        <img src={title} className="lg:w-36" />
        <div className="text-center text-red-600 text-lg font-medium lg:text-5xl" loading="lazy">
          Location
        </div>
      </div>
    </div>
  );
};

export default LocationTitle;
