import cs from "../../assets/img/speaker/moreSpeaker.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const ComingSoon = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={cs} />
    </div>
  );
};

export default ComingSoon;
