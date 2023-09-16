'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10 text-white'>
      <section className='mx-auto flex max-w-4xl items-center justify-between p-4'>
        <h1 className='text-3xl font-medium'>News App</h1>
        <>
          <button
            className={`relative h-8 w-8 cursor-pointer text-3xl ${
              mobileMenu ? 'toggle-btn' : ''
            } md:hidden`}
            onClick={toggleMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
        </>
        <nav className='hidden space-x-8 text-xl md:block'>
          <a href='#Home' className='hover-opacity-90'>
            Home
          </a>
          <a href='#About' className='hover-opacity-90'>
            About
          </a>
          <a href='#Contact us' className='hover-opacity-90'>
            Contact Us
          </a>
        </nav>
      </section>
      <section
        className='top-68 absolute hidden w-full origin-top animate-open-menu flex-col justify-center bg-slate-500 text-5xl'
        onClick={toggleMenu}
      >
        <nav
          className='flex min-h-screen flex-col items-center py-8'
          aria-label='mobile'
        >
          <a href='#Home' className='w-full py-6 text-center hover:opacity-80'>
            Home
          </a>
          <a href='#About' className='w-full py-6 text-center hover:opacity-80'>
            About
          </a>
          <a
            href='#testimonials'
            className='w-full py-6 text-center hover:opacity-80'
          >
            Contact Us
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
