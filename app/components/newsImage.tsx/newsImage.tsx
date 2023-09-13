interface Props {
  oneNewsData: SliderNews;
}
const NewsImage = ({ oneNewsData }: Props) => {
  return (
    <article
      className='w-[300px] flex items-end rounded-xl'
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(56,56,56,0), rgba(56,56,56,1)),url(${oneNewsData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '320px',
      }}
    >
      <section className='h-2/3 flex flex-col justify-end p-6'>
        <section className='h-1/2 w-full'></section>
        <section className='h-1/2'>
          <p className='text-3xl text-white font-bold'>{oneNewsData.title} </p>
        </section>
      </section>
    </article>
  );
};

export default NewsImage;
