import title from "../../assets/img/whatistedx/title3.svg";
import ted from "../../assets/img/whatistedx/tedxunj.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Tedxunj = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container w-full p-8 justify-center items-center flex flex-col gap-6">
        <h2 className="font-artega text-center lg:text-4xl text-white">What is TEDXUNJ</h2>
        <img src={ted} className="mx-auto" loading="lazy"/>
        <span className="font-artega text-xxs text-justify md:text-base text-white">
          TEDxUNJ is a program where community members and community leaders can
          share brilliant ideas with audience in the Jakarta State University
          environment, to provide new repertoire in social issues, politics,
          religion, diversity, language, art, culture, and other things that are
          not limited.
        </span>
      </div>
    </div>
  );
};

export default Tedxunj;
