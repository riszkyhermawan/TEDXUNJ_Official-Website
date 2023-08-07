import title from "../../assets/img/HomeSpeakerTitle.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const HomeSpeakerTitle = () => {
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
        <div className="text-white text-xs font-medium md:text-base lg:text-md xl:text-xl">
          Main Event
        </div>
        <img src={title} className="md:w-36 lg:w-56 xl:w-96" loading="lazy"/>
      </div>
    </div>
  );
};

export default HomeSpeakerTitle;
