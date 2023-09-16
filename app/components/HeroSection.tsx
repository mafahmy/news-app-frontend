import Image from 'next/image';
import NewsImagesSlider from './newsImageSlider/NewsImagesSlider';

const HeroSection = () => {
  return (
    <>
      <section className='my-12 flex mx-auto flex-col items-center justify-center gap-8 p-6 sm:flex-row flex-wrap'>
        <article className='min-w-[350px] sm:w-1/2 p-4'>
          <h2 className='max-w-md w-full text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-4xl'>
            We Boldly Go
            <span className='text-indigo-700 dark:text-indigo-300'>
              {' Where No Rocket '}
            </span>
            Has Gone Before...
          </h2>
          <p className='mt-4 max-w-md text-center text-xl text-slate-700 dark:text-slate-400 sm:text-left sm:text-2xl'>
            We are building rockets for the next century today. From the Moon to
            Mars, Jupitar and beyond...
          </p>
          <p className='mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left'>
            Think Acme Rockets.
          </p>
        </article>
        <div className='p-3 bg-slate-500 rounded-3xl shadow-2xl'>
          <NewsImagesSlider />
        </div>
      </section>
      <hr className='mx-auto w-1/2 bg-black dark:bg-white' />
    </>
  );
};

export default HeroSection;
