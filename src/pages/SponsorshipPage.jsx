import Nav from "../components/Nav";
import SponsorLogo from "../components/sponsor/SponsorLogo";
import TitleSponsor from "../components/sponsor/titleSponsor";
import Footer from '../components/Footer'
import bg from '../assets/img/sponsor/bgSponsor.svg'

const SponsorshipPage = () => {
  return (
    <div className="scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-hidden lg:gap-16">
      <img src={bg} className="absolute overflow-hidden" />
      <div className="w-screen container ml-0 h-fit">
        <Nav/>
      </div>
      <TitleSponsor />
      <SponsorLogo />
      <div className="mt-36">
          <Footer />
      </div>
    </div>
  );
};

export default SponsorshipPage;
