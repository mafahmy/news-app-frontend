import NewsImage from './eachNews/EachNews';
import NewsImagesSlider from './newsImageSlider/NewsImagesSlider';
import testingNewsData from './testingNewsData';

const NewsFeed = () => {
  const sortedTestingNewsData = testingNewsData.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return (
    <section className='flex flex-wrap flex-col items-center mx-auto'>
      <div className='p-6 bg-gradient-to-br shadow-2xl rounded-xl flex flex-col items-center gap-5'>
        <h1 className='text-xl whitespace-nowrap text-slate-700 hover:font-bold underline'>
          Latest news feed
        </h1>
        <hr className='h-10'></hr>
        <div className='flex flex-wrap justify-around gap-6'>
          {/* <NewsImagesSlider /> */}
          {sortedTestingNewsData.map((oneNews, index) => (
            <>
              <NewsImage key={oneNews.title} oneNewsData={oneNews} />

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
                <p className='whitespace-nowrap'>Ad placeholder</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
