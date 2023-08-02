import title from '../../assets/img/locationTitle.svg'

const LocationTitle = () => {
    return (
        <div className="w-fit h-fit flex-col justify-start items-start inline-flex relative">
            <img src={title} className='lg:w-36'/>
            <div className="text-center text-red-600 text-lg font-medium lg:text-5xl">Location</div>
        </div>
    )
}

export default LocationTitle