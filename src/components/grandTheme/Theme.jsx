import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Theme = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container p-4 text-white font-artega text-xxs lg:text-base">
        What is meant by "Empowering The Future" generally refers to actions,
        initiatives or strategies aimed at increasing and realizing progress,
        growth, and positive future potential. It encapsulates the idea of
        ​​empowering individuals, communities, and societies to control their
        own destiny, make informed choices, and achieve their goals. We can
        start "Empowering The Future" with the smallest aspects around us and
        let it grow bigger everytime. In essence, "Empowering The Future"
        implies investing in and supporting endeavors that empower individuals
        and society as a whole to overcome challenges, embrace change, and build
        a brighter and more prosperous future.
      </div>
    </div>
  );
};

export default Theme;
