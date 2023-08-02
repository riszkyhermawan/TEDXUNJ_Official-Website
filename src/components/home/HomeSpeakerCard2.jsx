import speaker from "../../assets/img/speaker/speaker2.svg";

const HomeSpeakerCard2 = () => {
  return (
    <div className="w-full h-fit md:w-[200px] lg:w-[250px] xl:w-[300px] relative ">
      <img
        src={speaker}
        className="rounded-md md:w-[200px] lg:w-[250px] xl:w-[300px]"
      />
    </div>
  );
};

export default HomeSpeakerCard2;
