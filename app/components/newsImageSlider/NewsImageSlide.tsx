// Import necessary dependencies
import NextAndPrevButton from './NextAndPrevButton';
import SliderDots from './SliderDots';
import newsData from './data';

/**
 * Props is a TypeScript interface that defines the types of the props passed to the NewsImageSlide component.
 * @interface
 * @property {number} index - The current index in the slider.
 * @property {() => void} handleNextClick - Function to go to the next slide.
 * @property {() => void} handleBackClick - Function to go to the previous slide.
 * @property {(e: React.TouchEvent<HTMLDivElement>) => void} handleTouchStart - Function to handle touch start events.
 * @property {(e: React.TouchEvent<HTMLDivElement>) => void} handleTouchEnd - Function to handle touch end events.
 * @property {(e: React.TouchEvent<HTMLDivElement>) => void} handleTouchMove - Function to handle touch move events.
 */
interface Props {
  index: number;
  handleNextClick: () => void;
  handleBackClick: () => void;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  latestNewsData: OneNews[];
}

/**
 * NewsImageSlide is a component that displays a single slide in the news image slider.
 * It receives several props, including the current index and various event handlers.
 * @param {Props} props - The props passed to the component.
 * @returns {JSX.Element}
 */
const NewsImageSlide = ({
  index,
  latestNewsData,
  handleNextClick,
  handleBackClick,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
}: Props) => {
  return (
    <article
      className='relative min-w-[300px] flex items-end justify-center rounded-xl sm:min-w-[612px] sm:max-w-[612px] group'
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(56,56,56,0), rgba(56,56,56,1)),url(${latestNewsData[index].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '320px',
      }}
      onTouchMove={handleTouchMove} // Handle touch move events
      onTouchStart={handleTouchStart} // Handle touch start events
      onTouchEnd={handleTouchEnd} // Handle touch end events
    >
      <section className='h-2/3 flex flex-col justify-end p-6'>
        <section className='h-1/3 w-full'></section>
        <section className='h-2/3'>
          <h1 className='text-white text-xl font-semibold sm:text-2xl'>
            {latestNewsData[index].title}{' '}
          </h1>
        </section>
        <SliderDots index={index} /> {/* Display slider dots */}
      </section>
      <NextAndPrevButton
        handleNextClick={handleNextClick} // Handle click events for the next button
        handleBackClick={handleBackClick} // Handle click events for the back button
      />
    </article>
  );
};

export default NewsImageSlide;
