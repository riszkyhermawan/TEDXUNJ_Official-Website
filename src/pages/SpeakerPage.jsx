import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ComingSoon from "../components/speaker/ComingSoon";
import SpeakerContainer from "../components/speaker/SpeakerContainer";
import TitleSpeaker from "../components/speaker/TitleSpeaker";
import bg from "../assets/img/ticket/bg_ticket.svg";
import MisterySpeaker from "../components/speaker/MisterySpeaker";

const SpeakerPage = () => {
  return (
    <div className="gap-16 scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden">
      <img src={bg} className="absolute hidden md:block" />
      <div className="w-screen container ml-0 h-fit">
        <Nav/>
      </div>
      <TitleSpeaker />
      <SpeakerContainer />
      <MisterySpeaker />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default SpeakerPage;
