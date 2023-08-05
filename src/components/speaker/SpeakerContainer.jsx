import speaker1 from "../../assets/img/speaker/speaker1.svg";
import speaker2 from "../../assets/img/speaker/speaker2.svg";
import speaker4 from "../../assets/img/speaker/speaker4.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const SpeakerContainer = () => {
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
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img src={speaker1} />
          <img src={speaker2} />
          <img src={speaker4} />
        </div>
      </div>
    </div>
  );
};

export default SpeakerContainer;
