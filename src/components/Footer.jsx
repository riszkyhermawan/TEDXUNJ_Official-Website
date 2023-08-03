import logo from '../assets/img/logoNavbar.svg'
import ig from '../assets/img/footerIg.svg'

const Footer = () => {
  return (
    <div className="p-6 lg:p-2 w-screen flex flex-col bg-red-600 bg-opacity-50 gap-4 md:flex-row md:justify-center md:items-center lg:gap-16 xl:gap-56">
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
  );
};

export default Footer
