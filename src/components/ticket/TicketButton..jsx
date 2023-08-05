import btn from '../../assets/img/ticket/bookButton.svg'

const TicketButton = () => {
 return(
    <div className="w-screen relative  px-20 my-4 -mt-4 md:px-56 lg:px-[500px] lg:mt-20">
        <a href="http://bit.ly/TEDxUNJ2023_BookSeatPresale1">
            <img src={btn} alt="Book Your Ticket" />
        </a>

    </div>
 )   
}

export default TicketButton

