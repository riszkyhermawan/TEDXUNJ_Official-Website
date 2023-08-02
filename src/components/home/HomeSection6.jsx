import TeaserCard from "./TeaserCard";
import TeaserTitle from "./TeaserTitle";
import bg from '../../assets/img/bgTeaser.svg'

const HomeSection6 = () => {
    return (
      <div className="container w-screen font-artega my-20 md:mb-24 px-10 h-fit flex flex-col justify-center items-center space-y-4">
        <img src={bg} className="absolute mt-16 md:w-[500px] lg:w-[600px]" />
        <TeaserTitle />
        <TeaserCard />
      </div>
    );
  };
  
export default HomeSection6