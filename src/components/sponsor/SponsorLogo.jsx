import allobank from '../../assets/img/sponsor/allobank.svg'
import jktescape from '../../assets/img/sponsor/jakartaescape.svg'

const SponsorLogo = () => {
    return (
        <div className="gap-16 container w-full p-16 flex flex-col md:flex-row justify-center items-center relative">
            <img src={allobank} />
            <img src={jktescape} />
        </div>
    )
}

export default SponsorLogo