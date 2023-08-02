import title from '../../assets/img/HomeSpeakerTitle.svg'

const HomeSpeakerTitle = () => {
    return (
        <div className="w-fit h-fit flex-col justify-start items-start inline-flex relative">
            <div className="text-white text-xs font-medium md:text-base lg:text-md xl:text-xl">Main Event</div>
            <img src={title} className='md:w-36 lg:w-56 xl:w-96' />
        </div>
    )
}

export default HomeSpeakerTitle