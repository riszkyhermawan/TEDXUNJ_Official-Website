import Footer from "../components/Footer";
import Nav from "../components/Nav";
import MerchCards from "../components/merch/MerchCards";
import TitleMerch from "../components/merch/TitleMerch";

const MerchandisePage = () => {
  return (
    <div className="scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="w-screen container ml-0 h-fit">
        <Nav/>
      </div>
      <TitleMerch />
      <MerchCards />
      <Footer />
    </div>
  );
};

export default MerchandisePage;
