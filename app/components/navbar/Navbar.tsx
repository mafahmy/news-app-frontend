'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';

type MenuState = 'closed' | 'opened' | 'closing';
// | 'opening'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuState, setMenuState] = useState<MenuState>('closed');
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (menuState === 'closing') {
        setMenuState('closed');
      }
    }, 500);
  }, [menuState]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    setMenuState(menuState === 'closed' ? 'opened' : 'closing');
  };
  return (
    <header className='bg-slate-700 p-1 min-w-[370px] mx-auto sticky top-0 drop-shadow-xl z-10 text-white'>
      <section className='mx-auto flex items-center justify-between p-3 md:justify-around'>
        <h1 className='text-xl w-max whitespace-nowrap text-center font-medium sm:text-2xl md:text-3xl'>
          <Link href='/'>News Rocket</Link>
        </h1>
        <>
          <button
            className={`${styles.animation_btn} ${
              mobileMenu ? styles['toggle-btn'] : ''
            } md:hidden`}
            onClick={toggleMenu}
          >
            <div className={styles.div}></div>
          </button>

          {/* <button
            className={`relative h-8 w-8 cursor-pointer text-3xl ${
              mobileMenu ? 'toggle-btn' : ''
            } md:hidden`}
            onClick={toggleMenu}
          >
            <div
              className={`absolute top-4 -mt-0.5 h-0.5 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']`}
            ></div>
          </button> */}
        </>
        <nav className='hidden space-x-8 text-xl md:block'>
          <Link href='/' className='hover:opacity-90'>
            Home
          </Link>
          <Link href='/about' className='hover-opacity-90'>
            About us
          </Link>
          <Link href='/contact-us' className='hover:opacity-90'>
            Contact us
          </Link>
        </nav>
      </section>
      <section
        className={`absolute left-0 ${
          menuState === 'closed'
            ? 'top-[-600%]'
            : menuState === 'closing'
            ? 'animate-close-menu'
            : 'animate-open-menu'
        } w-full mx-auto min-h-fit origin-top flex-col justify-center bg-white text-2xl opacity-90 text-slate-700`}
        onClick={toggleMenu}
      >
        <nav
          className='flex flex-col w-5/6 mx-auto py-8 items-start justify-center'
          aria-label='mobile'
        >
          <Link
            href='/'
            className='w-full py-6 hover:opacity-80 flex items-center justify-between'
          >
            Home
            <AiOutlineHome />
          </Link>
          <Link
            href='/about'
            className='w-full py-6 hover:opacity-80 flex items-center justify-between'
          >
            About
            <AiOutlineQuestionCircle />
          </Link>
          <Link
            href='/contact-us'
            className='w-full py-6 hover:opacity-80 flex items-center justify-between'
          >
            Contact Us
            <AiOutlineContacts />
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
