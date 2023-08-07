import logo from "../../assets/img/logoTitle1.png";
import logox from "../../assets/img/logoXtitle1.svg";
import title from "../../assets/img/title1.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const TitleHome = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="space-y-2 relative flex flex-col md:flex-row md:space-x-2 justify-center items-center md:mt-16 lg:my-48">
        <img src={logo} className="mx-auto md:my-auto md:mx-0 lg:w-56" loading="lazy"/>
        <img src={logox} className="mx-auto md:my-auto md:mx-0 lg:w-36" loading="lazy"/>
        <img src={title} className="mx-auto md:my-auto md:mx-0 lg:w-72" loading="lazy"/>
      </div>
    </div>
  );
};

export default TitleHome;
