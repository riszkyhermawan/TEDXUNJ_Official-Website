import allobank from '../../assets/img/sponsor/allobank.svg'
import jktescape from '../../assets/img/sponsor/jakartaescape.svg'

const SponsorLogo = () => {
    return (
        <div className="container w-full p-4 flex flex-col md:flex-row justify-center items-center relative">
            <img src={allobank} />
            <img src={jktescape} />
        </div>
    )
}

export default SponsorLogo