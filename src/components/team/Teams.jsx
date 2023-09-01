import team2 from "../../assets/img/team/team2.png";
import team3 from "../../assets/img/team/team3.png";
import team4 from "../../assets/img/team/team4.png";
import team5 from "../../assets/img/team/team5.png";
import team6 from "../../assets/img/team/team6.png";
import team7 from "../../assets/img/team/team7.png";
import team8 from "../../assets/img/team/team8.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Teams = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);
  const ref7 = useRef();
  const isVisible7 = useIsVisible(ref7);
  return (
    <div className="container p-4 flex flex-col md:p-32">
      <div
        ref={ref1}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={team2} loading="lazy" />
      </div>
      <div
        ref={ref2}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={team3} loading="lazy" />
      </div>
      <div
        ref={ref3}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:py-24 justify-center items-center mx-auto">
          <img src={team4} className="mx-auto" loading="lazy"/>
        </div>
      </div>
      <div
        ref={ref4}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={team5} loading="lazy" />
      </div>
      <div
        ref={ref5}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:py-24 justify-center items-center mx-auto">
          <img src={team6} className="mx-auto" loading="lazy"/>
        </div>
      </div>
      <div
        ref={ref6}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible6 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={team7} loading="lazy"/>
      </div>
      <div
        ref={ref7}
        className={`transition-opacity ease-in-out duration-700 ${
          isVisible7 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={team8} loading="lazy"/>
      </div>
    </div>
  );
};

export default Teams;
