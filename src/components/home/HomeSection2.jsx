import bg1 from "../../assets/img/bgHomeSection2_left.svg";
import bg2 from "../../assets/img/bgHomeSection2_right.svg";
import Whatistedx from "./Whatistedx";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const HomeSection2 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div className="container w-screen font-artega mt-32 px-10 h-fit xl:mt-72 lg:my-48">
      <div ref={ref1} className={`transition-opacity ease-in-out duration-200 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <img src={bg1} className="absolute left-0" loading="lazy" />
        <img src={bg2} className="absolute right-0" loading="lazy"/>
      </div>
      <Whatistedx />
    </div>
  );
};

export default HomeSection2;
