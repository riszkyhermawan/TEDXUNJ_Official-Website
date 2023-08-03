import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Theme from "../components/grandTheme/Theme";
import ThemeCards from "../components/grandTheme/ThemeCards";
import MainCard from "../components/grandTheme/mainCard";

const GrandThemePage = () => {
  return (
    <div className="scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="w-screen container ml-0 h-fit">
        <Nav />
      </div>
      <MainCard />
      <Theme />
      <ThemeCards />
      <Footer />
    </div>
  );
};

export default GrandThemePage;
