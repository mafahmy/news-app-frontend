import newsData from './data';

interface Props {
  slideData: SliderNews;
}
const NewsImageSlide = ({ slideData }: Props) => {
  return (
    <article
      className='min-w-[300px] flex items-end rounded-xl sm:min-w-[612px] sm:max-w-[612px]'
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(56,56,56,0), rgba(56,56,56,1)),url(${slideData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '320px',
      }}
    >
      <section className='h-2/3 flex flex-col justify-end p-6'>
        <section className='h-1/2 w-full'></section>
        <section className='h-1/2'>
          <p className='text-3xl text-white font-bold'>{slideData.title} </p>
        </section>
      </section>
    </article>
  );
};

export default NewsImageSlide;
