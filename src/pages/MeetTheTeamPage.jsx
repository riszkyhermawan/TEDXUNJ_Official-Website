import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Team1 from "../components/team/Team1";
import Teams from "../components/team/Teams";
import TitleTeam from "../components/team/TitleTeam";

const MeetTheTeamPage = () => {
  return (
    <div className="scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="w-screen container ml-0 h-fit">
        <Nav/>
      </div>
      <TitleTeam />
      <Team1 />
      <Teams />
      <Footer />
    </div>
  );
};

export default MeetTheTeamPage;
