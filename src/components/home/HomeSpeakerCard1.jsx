import speaker from "../../assets/img/speaker/speaker1.svg";

const HomeSpeakerCard1 = () => {
  return (
    <>
      <div className="w-full h-fit md:w-[200px] lg:w-[250px] xl:w-[300px] relative">
        <img
          src={speaker}
          className="rounded-md md:w-[200px] lg:w-[250px] xl:w-[300px]"
        />
      </div>
    </>
  );
};

export default HomeSpeakerCard1;
