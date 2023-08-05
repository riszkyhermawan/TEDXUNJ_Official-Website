import Nav from "../components/Nav";
import TitleHome from "../components/home/TitleHome";
import Ticket from "../components/ticket/Ticket";
import Footer from "../components/Footer";
import btn from "../assets/img/ticket/bookButton.svg";
import bg from "../assets/img/ticket/bg_ticket.svg";
import TicketButton from "../components/ticket/TicketButton.";

const TicketPage = () => {
  return (
    <div className="scroll-smooth bg-black static top-0 h-fit w-screen flex flex-col justify-center items-start overflow-x-hidden">
      <img src={bg} className="absolute hidden md:block" />
      <Nav />
      <h1 className="text-white font-artega ml-8 mr-auto md:m-16">
        Book your Ticket Now!
      </h1>
      <div className="m-8 md:-mt-16 lg:-mt-32 mx-auto">
        <TitleHome />
      </div>
      <Ticket />
      <TicketButton />
      <div className="lg:mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default TicketPage;
