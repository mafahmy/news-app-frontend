'use client';
import { useState, useEffect } from 'react';
import NewsImageSlide from './NewsImageSlide';
import newsData from './data';

const NewsImagesSlider = () => {
  const [index, setIndex] = useState(0);
  // State to keep track of touch events
  const [touchDown, setTouchDown] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (newsData.length - 1 === index) {
        setIndex(0);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);
  // Event handler for touch start events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchDown(true);
    setStartX(e.touches[0].clientX);
  };
  //Event handler for touch end events
  const handletouchEnd = () => {
    setTouchDown(false);
  };

  // Event handler for touch move events
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const threshold = 5;
    if (touchDown) {
      if (e.touches[0].clientX < startX - threshold) {
        if (newsData.length - 1 === index) {
          setIndex(0);
        } else {
          setIndex((prevIndex) => prevIndex + 1);
        }
      } else if (e.touches[0].clientX > startX + threshold) {
        if (index === 0) {
          return;
        } else {
          setIndex((prevIndex) => prevIndex - 1);
        }
      }
      setTouchDown(false);
    }
  };

  // Event handler for button click events
  const handleClick = () => {
    if (newsData.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex((previusIndex) => previusIndex + 1);
    }

    console.log(index);
  };

  const handleBackClick = () => {
    if (index === 0) {
      return;
    }
    setIndex((previusIndex) => previusIndex - 1);
  };

  return (
    <>
      <section className='flex max-w-[300px] items-end rounded-xl sm:min-w-[612px] sm:max-w-[612px] overflow-x-hidden'>
        {newsData.map((slide) => (
          <NewsImageSlide
            key={slide.id}
            index={index}
            handleClick={handleClick}
            handleBackClick={handleBackClick}
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handletouchEnd}
            handleTouchMove={handleTouchMove}
          />
        ))}
      </section>
    </>
  );
};

export default NewsImagesSlider;
