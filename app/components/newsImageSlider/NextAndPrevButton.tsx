// Import necessary dependencies
import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

/**
 * Props is a TypeScript interface that defines the types of the props passed to the NextAndPrevButton component.
 * @interface
 * @property {() => void} handleClick - Function to handle click events for the next button.
 * @property {() => void} handleBackClick - Function to handle click events for the back button.
 */
interface Props {
  handleNextClick: () => void;
  handleBackClick: () => void;
}

/**
 * NextAndPrevButton is a component that displays next and previous buttons.
 * It receives two props: handleClick and handleBackClick, which are functions that handle click events for the next and previous buttons, respectively.
 * @param {Props} props - The props passed to the component.
 * @returns {JSX.Element}
 */
const NextAndPrevButton = ({ handleNextClick, handleBackClick }: Props) => {
  return (
    <div className='hidden w-full justify-between items-center absolute top-0 bottom-0 left-0 text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:flex'>
      {/* Back button */}
      <button className='py-2' onClick={handleBackClick}>
        <AiFillCaretLeft />
      </button>
      {/* Next button */}
      <button className='py-2' onClick={handleNextClick}>
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default NextAndPrevButton;
