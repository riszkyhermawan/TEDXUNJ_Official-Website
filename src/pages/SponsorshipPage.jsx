import Nav from "../components/Nav";
import SponsorLogo from "../components/sponsor/SponsorLogo";
import TitleSponsor from "../components/sponsor/titleSponsor";
import Footer from '../components/Footer'
import bg from '../assets/img/sponsor/bgSponsor.svg'

const SponsorshipPage = () => {
  return (
    <div className="minh-screen gap-16 scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden">
      <img src={bg} className="absolute hidden md:block" />
      <div className="w-screen min-h-screen container ml-0 h-fit">
        <Nav/>
        <TitleSponsor />
        <SponsorLogo />
      </div>
      
      <Footer />
    </div>
  );
};

export default SponsorshipPage;
