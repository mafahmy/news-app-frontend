import NextAndPrevButton from './NextAndPrevButton';
import SliderDots from './SliderDots';
import newsData from './data';

interface Props {
  index: number;
  handleClick: () => void;
  handleBackClick: () => void;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
}
const NewsImageSlide = ({
  index,
  handleClick,
  handleBackClick,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
}: Props) => {
  return (
    <article
      className='relative min-w-[300px] flex items-end justify-center rounded-xl sm:min-w-[612px] sm:max-w-[612px] group'
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(56,56,56,0), rgba(56,56,56,1)),url(${newsData[index].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '320px',
      }}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <section className='h-2/3 flex flex-col justify-end p-6'>
        <section className='h-1/2 w-full'></section>
        <section className='h-1/2'>
          <h1 className='text-2xl text-white font-semibold'>
            {newsData[index].title}{' '}
          </h1>
        </section>
        <SliderDots index={index} />
      </section>
      <NextAndPrevButton
        handleClick={handleClick}
        handleBackClick={handleBackClick}
      />
    </article>
  );
};

export default NewsImageSlide;
