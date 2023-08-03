import speaker from "../../assets/img/speaker/speaker1.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const HomeSpeakerCard1 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-fit md:w-[200px] lg:w-[250px] xl:w-[300px] relative">
        <img
          src={speaker}
          className="rounded-md md:w-[200px] lg:w-[250px] xl:w-[300px]"
        />
      </div>
    </div>
  );
};

export default HomeSpeakerCard1;
