import Image from 'next/image';
import NewsImagesSlider from './newsImageSlider/NewsImagesSlider';

const HeroSection = () => {
  return (
    <>
      <section className='h-20'></section>
      <section className='flex mx-auto flex-wrap justify-center gap-5 items-center md:max-w-[90%]'>
        {/* <section className='my-12 flex mx-auto flex-col items-center justify-center gap-8 p-6 sm:flex-row flex-wrap'> */}
        <article className='min-w-[250px] sm:w-1/2 p-4'>
          <h2 className='max-w-md w-full text-center text-3xl font-bold text-slate-900 sm:text-left sm:text-4xl'>
            We Boldly Go
            <span className='text-indigo-700'>{' Where No Rocket '}</span>
            Has Gone Before...
          </h2>
          <p className='mt-4 max-w-md text-center text-xl text-slate-700 sm:text-left sm:text-2xl'>
            We are building rockets for the next century today. From the Moon to
            Mars, Jupitar and beyond...
          </p>
          <p className='mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left'>
            Think Acme Rockets.
          </p>
        </article>
        <div className='p-3 bg-gray rounded-3xl shadow-2xl'>
          <NewsImagesSlider />
        </div>
      </section>
      <section className='h-20'></section>
      <hr className='mx-auto w-1/2 bg-black' />
    </>
  );
};

export default HeroSection;
