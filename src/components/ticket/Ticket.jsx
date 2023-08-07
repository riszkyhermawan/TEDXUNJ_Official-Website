import presale1Active from '../../assets/img/ticket/presale1_primary.png'
import presale2Non from '../../assets/img/ticket/presale2_sec.svg'
import presale2Active from '../../assets/img/ticket/presale2_primary.svg'
import presale1Non from '../../assets/img/ticket/presale1_sec.svg'

const Ticket = () => {
    return (
        <div className='flex flex-col gap-2 p-2 relative justify-center items-center my-8 md:flex-row w-screen lg:-mt-32'>
            <img src={presale1Active} className='w-9/12 md:w-5/12 ' loading="lazy"/>
            <img src={presale2Non} className='w-9/12 md:w-5/12' loading="lazy"/>
        </div>

    )
}

export default Ticket