import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Ted from "../components/whatistedx/Ted";
import Tedx from "../components/whatistedx/Tedx";
import Tedxunj from "../components/whatistedx/Tedxunj";
import Unj from "../components/whatistedx/Unj";

const WhatisTEDX = () => {
  return (
    <div className="scroll-smooth bg-[#030303] static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden gap-16">
      <div className="w-screen container ml-0 h-fit">
        <Nav />
      </div>
      <Ted />
      <Tedx />
      <Tedxunj />
      <Unj />
      <Footer />
    </div>
  );
};

export default WhatisTEDX;
