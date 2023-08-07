import HomeSpeakerCard1 from "./HomeSpeakerCard1";
import HomeSpeakerCard2 from "./HomeSpeakerCard2";
import HomeSpeakerCard3 from "./HomeSpeakerCard3";
import HomeSpeakerTitle from "./HomeSpeakerTitle";
import arrow from '../../assets/img/arrow.png'

const HomeSection4 = () => {
  return (
    <div className="container w-screen font-artega my-28 px-10 h-fit flex flex-col justify-center items-center space-y-8 md:space-y-16 lg:space-y-24 xl:mt-52">
        <HomeSpeakerTitle />
        <div className="container flex flex-row w-fit space-x-8 justify-center items-start lg:space-x-16">
            <HomeSpeakerCard1 />
            <HomeSpeakerCard2 />
            <HomeSpeakerCard3 />
        </div>
        <a href="/speaker">
          <button className="flex-row gap-1 flex md:px-2 md:py-1 md:text-xxs bg-[#EB0028] font-artega text-xxs px-2 py-1 text-white drop-shadow-none lg:text-xs lg:px-4 lg:py-2 lg:rounded-xl">
                <span className="text-white">
                  See All Speakers 
                </span>
                <img src={arrow} className="w-4 -rotate-90" loading="lazy"/>
          </button>
        </a>
    </div>
  );
};

export default HomeSection4;
