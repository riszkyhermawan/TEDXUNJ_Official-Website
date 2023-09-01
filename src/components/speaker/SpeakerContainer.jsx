import speaker1 from "../../assets/img/speaker/speaker1.png";
import speaker2 from "../../assets/img/speaker/speaker2.png";
import speaker3 from "../../assets/img/speaker/speaker3.png";
import speaker4 from "../../assets/img/speaker/speaker4.png";
import speaker5 from "../../assets/img/speaker/speaker5.png";
import speaker6 from "../../assets/img/speaker/speaker6.png";
import speaker7 from "../../assets/img/speaker/speaker7.png";
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            <img src={speaker1} loading="lazy"/>
            <img src={speaker2} loading="lazy"/>
            <img src={speaker3} loading="lazy"/>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            <img src={speaker4} loading="lazy"/>
            <img src={speaker5} loading="lazy"/>
            <img src={speaker6} loading="lazy"/>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            <img src={speaker7} loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerContainer;
