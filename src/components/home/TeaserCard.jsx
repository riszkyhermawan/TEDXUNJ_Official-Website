import teaser from '../../assets/video/teaser.mp4'

const TeaserCard = () => {
  return (
    <div className="w-full h-fit md:w-[500px] lg:w-[600px] py-2 px-4 bg-gradient-to-r from-stone-500 to-white/75 rounded-3xl shadow border border-white backdrop-blur-2xl flex-col justify-center items-center gap-1.5 inline-flex">
      <iframe src={teaser} frameBorder="0" className="w-full aspect-video rounded-lg"></iframe>
    </div>
  );
};

export default TeaserCard;
