import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface Props {
  handleClick: () => void
  handleBackClick: () => void
}

const NextAndPrevButton = ({ handleClick , handleBackClick}: Props) => {
  return (
    <div className='w-full flex justify-between items-center absolute top-0 bottom-0 left-0 text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
      <button className='py-2' onClick={handleBackClick}>
        <AiFillCaretLeft />
      </button>
      <button className='py-2' onClick={handleClick}>
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default NextAndPrevButton;
