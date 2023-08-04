import title from "../../assets/img/team/titleTeam.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const TitleTeam = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full p-2 flex justify-center items-center">
        <img src={title} />
      </div>
    </div>
  );
};

export default TitleTeam;
