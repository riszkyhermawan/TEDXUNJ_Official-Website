import loc from "../../assets/img/location.jpg";
import { useIsVisible } from "../ScorllAnim";
import { useRef } from "react";

const LocationCard = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full md:w-[500px] lg:w-[600px] px-7 py-5 bg-gradient-to-r from-stone-500 to-white/75 rounded-3xl shadow border border-white backdrop-blur-2xl flex-col justify-center items-start gap-4 inline-flex">
        <img src={loc} className="w-full relative rounded-2xl md:w-full" loading="lazy"/>
        <div className="flex-col justify-start items-start gap-2 flex ">
          <div className="w-full text-white text-xs font-medium">
            Aula Latief Lt2, Gedung Rektorat UNJ. Blok Daksenapati Timur No.6,
            RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur,
            Daerah Khusus Ibukota Jakarta 13220
          </div>
        </div>
        <a href="https://www.google.com/maps/place/Aula+Latief+Universitas+Negeri+Jakarta/@-6.1950874,106.8785945,15z/data=!4m2!3m1!1s0x0:0x190de32f86b35680?sa=X&ved=2ahUKEwjjmvunxr6AAxU4d2wGHYq6D-cQ_BJ6BAhREAA&hl=id&ved=2ahUKEwjjmvunxr6AAxU4d2wGHYq6D-cQ_BJ6BAhbEAg">
          <button className="flex-row gap-1 flex md:px-2 md:py-1 md:text-xxs bg-[#EB0028] font-artega text-xxs px-2 py-1 text-white drop-shadow-none lg:text-xs lg:px-4 lg:py-2 lg:rounded-xl">
            <span>See on Gmaps</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
