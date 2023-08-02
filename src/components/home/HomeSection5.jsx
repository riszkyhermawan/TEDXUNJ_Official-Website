import LocationCard from "./LocationCard";
import LocationTitle from "./LocationTitle";
import bg from '../../assets/img/bgLocation.svg'



const HomeSection5 = () => {
    return (
      <div className="container w-screen font-artega my-20 md:my-36 lg:my-72 px-10 h-fit flex flex-col justify-center items-center space-y-4 lg:space-y-24">
        <img src={bg} className="absolute w-screen h-fit" />
        <LocationTitle />
        <LocationCard />
      </div>
    );
  };
  
export default HomeSection5