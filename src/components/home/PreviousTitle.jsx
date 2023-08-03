import title from "../../assets/img/previousTitleText.svg";
import logo from "../../assets/img/logoTitle1.png";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const PreviousTitle = () => {
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
        <img src={title} className="lg:w-[150px] xl:w-[250px]" />
        <img
          className="w-16 h-3.5 shadow md:w-48 md:h-10 lg:w-56 xl:w-72 xl:h-16"
          src={logo}
        />
      </div>
    </div>
  );
};

export default PreviousTitle;
