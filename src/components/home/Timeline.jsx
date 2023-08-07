import title from "../../assets/img/homeTimelineTitle.svg";
import timeline from "../../assets/img/homeTimeline.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Timeline = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container flex flex-col justify-center items-center gap-2 lg:my-24 md:gap-6">
        <img src={title} className="w-28 md:w-36 lg:w-64" loading="lazy"/>
        <img src={timeline} className="w-64 md:w-96 lg:w-[700px]" loading="lazy"/>
      </div>
    </div>
  );
};

export default Timeline;
