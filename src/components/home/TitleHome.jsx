import logo from '../../assets/img/logoTitle1.png'
import logox from '../../assets/img/logoXtitle1.svg'
import title from '../../assets/img/title1.svg'

const TitleHome = () => {
    return (
        <div className='space-y-2 relative flex flex-col md:flex-row md:space-x-2 justify-center items-center md:mt-16'>
            <img src={logo} className='mx-auto md:my-auto md:mx-0 lg:w-56'/>
            <img src={logox} className='mx-auto md:my-auto md:mx-0 lg:w-36'/>
            <img src={title} className='mx-auto md:my-auto md:mx-0 lg:w-72'/>
        </div>
    )
}

export default TitleHome