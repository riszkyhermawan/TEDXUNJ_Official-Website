import { Carousel, IconButton } from "@material-tailwind/react";
import doc1 from "../../assets/img/lastYear/1.jpg";
import doc2 from "../../assets/img/lastYear/2.jpg";
import doc3 from "../../assets/img/lastYear/3.jpg";
import doc4 from "../../assets/img/lastYear/4.jpg";
import doc5 from "../../assets/img/lastYear/5.jpg";
import doc6 from "../../assets/img/lastYear/6.jpg";
import doc7 from "../../assets/img/lastYear/7.jpg";
import doc8 from "../../assets/img/lastYear/8.jpg";
import arrow from "../../assets/img/arrow.png";

export default function CarouselDefault() {
  return (
    <Carousel
      className="rounded-xl md:w-[400px] lg:w-[700px]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
          variant="text"
        >
          <img src={arrow} className="rotate-90" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
          variant="text"
          ripple={false}
        >
          <img src={arrow} className="-rotate-90" />
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-transparent" : "w-4 bg-transparemt"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img src={doc1} alt="image 1" className="h-full w-full object-cover" />
      <img src={doc2} alt="image 2" className="h-full w-full object-cover" />
      <img src={doc3} alt="image 3" className="h-full w-full object-cover" />
      <img src={doc4} alt="image 3" className="h-full w-full object-cover" />
      <img src={doc5} alt="image 3" className="h-full w-full object-cover" />
      <img src={doc6} alt="image 3" className="h-full w-full object-cover" />
      <img src={doc7} alt="image 3" className="h-full w-full object-cover" />
      <img src={doc8} alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
}
