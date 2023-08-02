import title from '../../assets/img/homeTimelineTitle.svg'
import timeline from '../../assets/img/homeTimeline.svg'

const Timeline = () => {
    return (
        <div className="container flex flex-col justify-center items-center gap-2 lg:my-24 md:gap-6">
            <img src={title} className='w-28 md:w-36 lg:w-64' />
            <img src={timeline} className='w-64 md:w-96 lg:w-[700px]'/>
        </div>
    )
}

export default Timeline