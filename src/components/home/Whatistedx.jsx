import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Whatistedx = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container w-full px-9 py-10 bg-neutral-600 bg-opacity-25 rounded-2xl backdrop-blur-xl flex-col justify-center items-center gap-5 inline-flex">
        <h3 className="text-center text-white text-sm font-medium lg:text-lg">
          What is TEDx?
        </h3>
        <p className="text-center text-neutral-400 text-xxs font-medium lg:text-xs">
          In the spirit of ideas worth spreading, TED has created a program
          called TEDx. TEDx is a program of local, self-organized events that
          bring people together to share a TED-like experience. Our event is
          called TEDxUNJ, where x = independently organized TED Event. At our
          TEDxUNJ event, TEDTalks video and live speakers will combine to spark
          deep discussion and connection in a small group. The TED conference
          provides general guidance for the TEDx program, but individual TEDx
          Events, including ours, are self-organized.
        </p>
      </div>
      <div className="container w-full px-9 py-10 bg-neutral-600 bg-opacity-25 rounded-2xl backdrop-blur-xl flex-col justify-center items-center gap-5 inline-flex">
        <h3 className="text-center text-white text-sm font-medium lg:text-lg">
          Our Mission
        </h3>
        <p className="text-center text-neutral-400 text-xxs font-medium lg:text-xs">
          TEDxUNJ aims to create intellectual, diversity, and inclusion
          atmosphere around Universitas Negeri Jakarta and Indonesia. Thus to
          provide a platform for ideas to be expressed so in the future this can
          lead to positive change.
        </p>
      </div>
    </div>
  );
};

export default Whatistedx;
