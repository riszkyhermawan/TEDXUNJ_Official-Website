import title from "../../assets/img/teaserTitle.svg";
import logo from "../../assets/img/logoTitle1.png";

const TeaserTitle = () => {
  return (
    <div className="w-fit h-fit flex-col justify-start items-start inline-flex relative">
      <img src={title} className="lg:w-[100px] xl:w-[200px]" />
      <img
        className="w-16 h-3.5 shadow md:w-48 md:h-10 lg:w-56 xl:w-72 xl:h-16"
        src={logo}
      />
    </div>
  );
};

export default TeaserTitle;
