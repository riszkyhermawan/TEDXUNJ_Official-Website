import Nav from "../Nav";
import TitleHome from "./TitleHome";
import bg1 from "../../assets/img/bgBlueTitle1.svg";
import bg2 from "../../assets/img/bgRedTitle1.svg";
import bgmd1 from "../../assets/img/bgHomeSection1_mdRight.svg";
import bgmd2 from "../../assets/img/bgHomeSection1_mdLeft.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const HomeSection1 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div>
      <div className="w-screen container ml-0 h-fit">
        <div
          ref={ref1}
          className={`transition-opacity ease-in-out duration-100 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={bg1} className="absolute top-0 right-0 md:hidden" loading="lazy" />
          <img src={bg2} className="absolute bottom-36 left-0 md:hidden" loading="lazy"/>
          <img
            src={bgmd1}
            className="hidden top-0 right-0 md:block absolute w-2/4 " loading="lazy"
          />
          <img
            src={bgmd2}
            className="hidden left-0 bottom=0 md:block absolute w-1/3 lg:w-2/4 " loading="lazy"
          />
        </div>
        <Nav />
        <TitleHome />
      </div>
    </div>
  );
};

export default HomeSection1;
