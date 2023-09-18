'use client';
import { useState } from 'react';
interface Props {
  oneNewsData: SliderNews;
}
const EachNews = ({ oneNewsData }: Props) => {
  const [touchStart, setTouchStart] = useState(false);
  const [touchEnd, setTouchEnd] = useState(true);

  return (
    <article
      className={`w-[300px] shadow-2xl flex items-end rounded-xl transition duration-500 ease-in-out transform ${
        touchStart ? '-translate-y-1 scale-105' : ''
      } lg:hover:-translate-y-1 lg:hover:scale-105`}
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(56,56,56,0), rgba(56,56,56,1)),url(${oneNewsData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '320px',
      }}
      onTouchStart={() => setTouchStart(true)}
      onTouchEnd={() => setTouchStart(false)}
    >
      <section className='h-2/3 flex flex-col justify-end p-6'>
        {/* <section className='h-1/2 w-full'></section> */}
        <section className='h-full overflow-hidden flex items-end'>
          <h1 className='text-lg text-white font-semibold p-1'>
            {oneNewsData.title}{' '}
          </h1>
        </section>
      </section>
    </article>
  );
};

export default EachNews;
