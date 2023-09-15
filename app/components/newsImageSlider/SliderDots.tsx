import React from 'react';
import newsData from './data';

interface Props {
  index: number;
}

const SliderDots = ({ index }: Props) => {
  return (
    // Container for the dots
    <div className='text-center'>
      {/* Map over the onboardingScreens array to create a dot for each screen */}
      {newsData.map((_, idx) => (
        // Each dot is a div element with a unique key
        // The dot's color is determined by whether it represents the current screen (index === idx)
        <div
          key={idx}
          className={`relative inline-block h-1 w-1 rounded-full mx-2 my-4 ${
            index === idx ? 'bg-slate-200' : 'bg-slate-400'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SliderDots;
