'use client';
import { useEffect } from 'react';
import NewsImageSlide from './NewsImageSlide';
import useSlider from './useSlider';
import testingNewsData from '../testingNewsData';
import { getLatestNews } from './helpers/helper';

/**
 * NewsImagesSlider is a component that displays a slider of news images.
 * It uses a custom hook, useSlider, to handle the slider logic.
 * @returns JSX.Element
 */
const NewsImagesSlider = () => {
  const latestNewsData = getLatestNews(7, testingNewsData);
  // Destructure values from useSlider hook:

  const [
    index, // Current index in the slider
    handleNextClick, // Function to go to the next slide
    handleBackClick, // Function to go to the previous slide
    handleTouchMove, // Function to handle touch move events
    handleTouchEnd, // Function to handle touch end events
    handleTouchStart, // Function to handle touch start events
  ] = useSlider(0, latestNewsData.length); // Initialize useSlider with the initial index and total slides

  // Set up an effect to automatically advance to the next slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(handleNextClick, 3000);
    return () => clearTimeout(timer);
  }, [handleNextClick, index]);

  return (
    <>
      <section className='flex max-w-[300px] items-end rounded-xl sm:min-w-[612px] sm:max-w-[612px] overflow-x-hidden'>
        {/* Map over newsData array to render a NewsImageSlide component for each news item */}
        {latestNewsData.map((slide) => (
          <NewsImageSlide
            key={slide.publishedAt} // Unique key for each slide
            index={index} // Current index in the slider
            handleNextClick={handleNextClick} // Function to go to the next slide
            handleBackClick={handleBackClick} // Function to go to the previous slide
            handleTouchStart={handleTouchStart} // Function to handle touch start events
            handleTouchEnd={handleTouchEnd} // Function to handle touch end events
            handleTouchMove={handleTouchMove} // Function to handle touch move events
            latestNewsData={latestNewsData}
          />
        ))}
      </section>
    </>
  );
};

export default NewsImagesSlider;
