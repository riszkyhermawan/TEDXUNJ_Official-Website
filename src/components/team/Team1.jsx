import team1 from "../../assets/img/team/team1.svg";
import team1_nobg from "../../assets/img/team/team1_nobg.svg";

const Team1 = () => {
  return (
    <div className="w-full p-2 flex justify-center items-center">
      <img src={team1} className="hidden md:block"/>
      <img src={team1_nobg} className="md:hidden"/>
    </div>
  );
};

export default Team1;
