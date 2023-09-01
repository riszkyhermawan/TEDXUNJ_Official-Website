import team1 from "../../assets/img/team/team1.png";
import team1_nobg from "../../assets/img/team/team1_nobg.svg";

const Team1 = () => {
  return (
    <div className="w-screen p-2 flex justify-center items-center">
      <img src={team1} className="hidden md:block" loading="lazy"/>
      <img src={team1_nobg} className="md:hidden" loading="lazy"/>
    </div>
  );
};

export default Team1;
