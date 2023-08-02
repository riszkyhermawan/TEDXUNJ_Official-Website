import logo from "../../assets/img/logoTitle1.png";
import CarouselDoc from "./CarouselDoc"

const PreviousCard = () => {
  return (
    <div>
      <div className="w-full h-fit p-2 bg-gradient-to-r from-stone-500 to-white/75 rounded-xl shadow border border-white backdrop-blur-2xl flex-col justify-center items-center inline-flex">
        <CarouselDoc />
        <div className="container w-full justify-center items-center flex flex-row px-4F">
          <div className="text-neutral-400 text-xxxs font-medium md:text-xs">
            Manifesting True Colors
          </div>
          <div className="container w-fit flex felx-row ml-auto m-1">
            <img src={logo} className="w-11 h-2.5 md:w-24 md:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousCard;
