import mainCard from '../../assets/img/grandTheme/mainCard.svg'
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";


const MainCard = () => {
    const ref1 = useRef();
const isVisible1 = useIsVisible(ref1);
    return(
        <div ref={ref1} className={`transition-opacity ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className='container p-4'>
                <img src={mainCard} alt="" />
            </div>
        </div>
    )
}

export default MainCard