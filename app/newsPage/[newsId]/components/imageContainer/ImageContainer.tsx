import styles from './styles.module.css';

const ImageContainer = ({ oneNewsInfo }: { oneNewsInfo: OneNews }) => {
  return (
    <div className=' relative w-full mt-5 mb-9'>
      <a>
        <img
          className='object-cover w-full h-auto align-middle'
          src={oneNewsInfo.image}
          alt=''
        />
      </a>
    </div>
  );
};

export default ImageContainer;
