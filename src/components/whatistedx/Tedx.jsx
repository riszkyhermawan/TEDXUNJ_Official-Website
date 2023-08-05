import title from "../../assets/img/whatistedx/title2.svg";
import ted from "../../assets/img/whatistedx/tedx.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Tedx = () => {
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
        <h2 className="font-artega text-center lg:text-4xl">What is TEDX</h2>
        <img src={ted} className="mx-auto" />
        <span className="font-artega text-xxs text-justify md:text-base">
          TEDx is a profound initiative, created in the spirit of mission all
          over TED to research and find “decent ideas spread." TEDx brings the
          TED spirit to local communities all over world through TEDx events.
          This event is organized by individuals passionate people who seek to
          uncover new ideas and to share the latest research in their triggering
          areas conversation in their community. TEDx events include speakers
          live and TED Talks that are recorded, and hosted live independent
          under a free license granted by TED. This show is not regulated by
          TED, but event organizers agree to stick to the format TED, and offers
          guides to curation, speaker training, organizing events, and much
          more. They learn from us and from one another. More than 3000 TEDx
          events are now held annually.
        </span>
      </div>
    </div>
  );
};

export default Tedx;
