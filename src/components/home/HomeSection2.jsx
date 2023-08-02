import bg1 from '../../assets/img/bgHomeSection2_left.svg'
import bg2 from '../../assets/img/bgHomeSection2_right.svg'
import Whatistedx from './Whatistedx';


const HomeSection2 = () => {
  return (
    <>
      <div className="container w-screen font-artega mt-32 px-10 h-fit xl:mt-72">
        <img src={bg1} className='absolute left-0'/>
        <img src={bg2} className='absolute right-0'/>
        <Whatistedx />
      </div>
    </>
  );
};

export default HomeSection2;


