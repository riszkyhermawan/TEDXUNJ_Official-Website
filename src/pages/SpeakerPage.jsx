import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SpeakerContainer from "../components/speaker/SpeakerContainer";
import TitleSpeaker from "../components/speaker/TitleSpeaker";

const SpeakerPage = () => {
  return (
    <div className="scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="w-screen container ml-0 h-fit">
        <Nav/>
      </div>
      <TitleSpeaker />
      <SpeakerContainer />
      <Footer />
    </div>
  );
};

export default SpeakerPage;
