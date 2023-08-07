import card1 from '../../assets/img/grandTheme/card1.svg'
import card2 from '../../assets/img/grandTheme/card2.svg'
import card3 from '../../assets/img/grandTheme/card3.svg'
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const ThemeCards = () => {
    const ref1 = useRef();
const isVisible1 = useIsVisible(ref1);
    return(
        <div ref={ref1} className={`transition-opacity ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="container my-4 p-4 flex flex-col gap-2 justify-center items-center md:flex-row lg:gap-24">
                <img src={card1} loading="lazy" />
                <img src={card2} loading="lazy"/>
                <img src={card3} loading="lazy"/>
            </div>
        </div>
    )
}

export default ThemeCards