import title from "../../assets/img/whatistedx/title1.svg";
import ted from "../../assets/img/whatistedx/unj.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Ted = () => {
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
        <h2 className="font-artega text-center">AT STATE UNIVERISTY OF JAKARTA</h2>
        <img src={ted} className="mx-auto" />
        <span className="font-artega text-xxs text-justify md:text-base">
          TEDxUNJ 2023 is back with a new theme, namely "Empowering The Future:
          Nurturing The World Through The Smallest Aspects Around Us". The theme
          was taken with the intention to share "the ideas worth spreading" with
          the audience, especially around the Jakarta State University
          environment to care about the smallest aspects around us that are
          actually big aspects for the better future.
        </span>
      </div>
    </div>
  );
};

export default Ted;
