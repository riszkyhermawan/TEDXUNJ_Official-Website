import Nav from "../Nav"
import TitleHome from "./TitleHome"
import bg1 from "../../assets/img/bgBlueTitle1.svg"
import bg2 from "../../assets/img/bgRedTitle1.svg"
import bgmd1 from '../../assets/img/bgHomeSection1_mdRight.svg'
import bgmd2 from '../../assets/img/bgHomeSection1_mdLeft.svg'


const HomeSection1= () => {
    return (
        <><div className="w-screen container ml-0 h-fit">
            <img src={bg1} className="absolute top-0 right-0 md:hidden" />
            <img src={bg2} className="absolute bottom-36 left-0 md:hidden" />
            <img src={bgmd1} className="hidden top-0 right-0 md:block absolute w-2/4 "/>
            <img src={bgmd2} className="hidden left-0 bottom=0 md:block absolute w-1/3 lg:w-2/4 "/>
            <Nav />
            <TitleHome />
        </div>
        </>
    )
}

export default HomeSection1