import PreviousCard from "./PreviousCard";
import PreviousTitle from "./PreviousTitle";
import bg from "../../assets/img/bgPrevious.svg";

const HomeSection3 = () => {
  return (
    <div className="container w-screen font-artega my-8 md:my-36 lg:my-72 px-8 h-fit flex flex-col justify-center items-center space-y-4 lg:space-y-16">
      <img src={bg} className="absolute mt-16 w-screen"  />
      <PreviousTitle />
      <PreviousCard />
    </div>
  );
};

export default HomeSection3;
