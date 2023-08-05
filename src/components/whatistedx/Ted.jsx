import title from "../../assets/img/whatistedx/title1.svg";
import ted from "../../assets/img/whatistedx/ted.svg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const Ted = () => {
    const ref1 = useRef();
const isVisible1 = useIsVisible(ref1);
  return (
    <div ref={ref1} className={`transition-opacity ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <div className="container w-full p-8 justify-center items-center flex flex-col gap-6">
        <h2 className="font-artega text-center lg:text-4xl">What is TED</h2>
        <img src={ted} className="mx-auto" />
        <span className="font-artega text-xxs text-justify md:text-base">
            TED Talk is a recorded public-speaking presentation that was originally
            given at the main TED (Technology, Entertainment, and Design) annual
            event or one of its many satellite events around the world. TED is a
            non-profit institution that partners with individuals to assist in
            sharing ideas globally.Today, TED boasts a collection of over 3.000 TED
            Talk videos from politicians to scientists to comedians and actors.
            Additionally, they add new videos day in and day out, so there’s never a
            shortage of engaging content. As an additional plus, each TED Talk is
            available on their website or their YouTube channel for free
        </span>
        </div>
    </div>
  );
};

export default Ted;
