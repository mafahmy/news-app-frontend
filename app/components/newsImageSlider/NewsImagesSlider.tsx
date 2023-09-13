import React from 'react';
import NewsImageSlide from './NewsImageSlide';
import newsData from './data';

const NewsImagesSlider = () => {
  return (
    <section className='flex max-w-[300px] items-end rounded-xl sm:min-w-[612px] sm:max-w-[612px] overflow-hidden'>
      {newsData.map((slide) => (
        <NewsImageSlide key={slide.title} slideData={slide} />
      ))}
    </section>
  );
};

export default NewsImagesSlider;
