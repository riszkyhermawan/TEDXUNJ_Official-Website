import logo from '../assets/img/logoNavbar.svg'
import ig from '../assets/img/footerIg.svg'

const Footer = () => {
  return (
    <div className="p-6 w-screen flex flex-col bg-red-600 bg-opacity-50 gap-4 md:flex-row md:justify-center md:items-center lg:gap-16 xl:gap-56">
        <div className="flex flex-col">
            <img src={logo} className='w-20'/>
            <a href="" className='text-white text-xxxs font-artega underline lg:text-xxs lg:ml-4'>Visit TEDXUNJ program page</a>
        </div>
        <div className="text-white font-artega text-xs md:text-center">
            This independent TEDx event is operated under the license from TED
        </div>
        <div className="text-white font-artega text-xxs flex flex-row items-center gap-2">
            <a href="">
                <img src={ig} className='w-4 md:w-8 lg:w-6' />
            </a>
            @tedxunj
        </div>
    </div>
    // <div className="w-screen h-fit px-6 py-2.5 bg-red-600 bg-opacity-50 justify-center items-center gap-44 inline-flex">
    //   <div className="flex-col justify-start items-start gap-px inline-flex">
    //     <img
    //       className="w-16 h-3.5 shadow"
    //       src="https://via.placeholder.com/71x15"
    //     />
    //     <div className="text-white text-xs font-semibold underline">
    //       visit tedxUNJ program page
    //     </div>
    //   </div>
    //   <div className="text-center text-white text-base font-medium">
    //   </div>
    //   <div className="justify-center items-center gap-6 flex" />
    // </div>
  );
};

export default Footer
