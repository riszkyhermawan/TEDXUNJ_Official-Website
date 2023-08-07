import title from "../../assets/img/speaker/title.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const TitleSpeaker = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div className="relative">
      <div
        ref={ref1}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={title} loading="lazy" />
      </div>
    </div>
  );
};

export default TitleSpeaker;
