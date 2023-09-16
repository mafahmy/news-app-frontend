const Footer = () => {
  const today = new Date();
  return (
    <footer className='bg-slate-700 p-3 text-white bottom-0'>
      <p className='text-center text-xl'>
        News App Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
