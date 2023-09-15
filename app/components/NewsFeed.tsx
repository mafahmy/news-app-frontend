import NewsImage from './eachNews/EachNews';
import NewsImagesSlider from './newsImageSlider/NewsImagesSlider';
import newsData from './newsImageSlider/data';

const NewsFeed = () => {
  return (
    <section className='flex flex-wrap flex-col items-center mx-auto sm:w-full lg:w-[93%]'>
      <div className='flex flex-wrap justify-center gap-6 py-6 bg-white rounded-xl'>
        <NewsImagesSlider />
        {newsData.map((oneNews, index) => (
          <>
            <NewsImage key={oneNews.image} oneNewsData={oneNews} />

            <div
              style={{
                width: '300px',
                height: '320px',
                backgroundColor: '#ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p>Ad placeholder</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
