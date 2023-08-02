import Footer from '../components/Footer'
import HomeSection1 from '../components/home/HomeSection1'
import HomeSection2 from '../components/home/HomeSection2'
import HomeSection3 from '../components/home/HomeSection3'
import HomeSection4 from '../components/home/HomeSection4'
import HomeSection5 from '../components/home/HomeSection5'
import HomeSection6 from '../components/home/HomeSection6'
import Timeline from '../components/home/Timeline'


const Homepage = () => {
    return (
        <div className='bg-black static top-0 h-fit w-screen flex flex-col justify-center items-center overflow-x-hidden'>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <Timeline />
            <HomeSection5 />
            <HomeSection6 />
            <Footer />
        </div>
    )
}

export default Homepage