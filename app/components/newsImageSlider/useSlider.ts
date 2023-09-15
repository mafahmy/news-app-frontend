import { useState } from 'react';

const useSlider = (initialIndex: number, length: number) => {
  const [index, setIndex] = useState(initialIndex);
  const [touchDown, setTouchDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % length);
  };
  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };
  const handleNextClick = () => {
    next();
  };
  const handleBackClick = () => {
    prev();
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchDown(true);
    setStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchDown(false);
  };
  const hamdleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const threshold = 5;
    if (touchDown) {
      if (e.touches[0].clientX < startX - threshold) {
        next();
      } else if (e.touches[0].clientX > startX + threshold) {
        prev();
      }
      setTouchDown(false);
    }
  };
  return [
    index,
    handleNextClick,
    handleBackClick,
    hamdleTouchMove,
    handleTouchEnd,
    handleTouchStart,
  ];
};
export default useSlider;
