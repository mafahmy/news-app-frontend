import styles from './styles.module.css';

const ImageContainer = ({ oneNewsInfo }: { oneNewsInfo: OneNews }) => {
  return (
    <div className='relative w-full h-full mt-5 mb-9'>
      <a className='h-96 relative overflow-hidden rounded-md object-cover block'>
        <div
          className='bg-no-repeat bg-cover blur-3xl h-96'
          style={{
            backgroundImage: `url(${oneNewsInfo.image})`,
          }}
        ></div>
      </a>
    </div>
  );
};

export default ImageContainer;
