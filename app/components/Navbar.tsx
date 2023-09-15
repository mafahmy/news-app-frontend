import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <Link href='/' className='no-underline text-white/80 hover:text-white'>
          🚀👌Slider👌🚀
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
