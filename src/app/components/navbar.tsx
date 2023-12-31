'use client';
import Logo from '../assets/img/logo.jpg';
import { useState } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="flex bg-black justify-between items-center font-serif z-10 sticky top-0 animate__animated animate__fadeInDown">
      <Link href={'/'}>
        <Image
          src={Logo}
          alt="logo-image"
          width={33}
          height={33}
          className="w-full object-cover cursor-pointer ml-5 rounded"
        />
      </Link>
      <div>
        <div className="sm:hidden ">
          <button className="mr-5  mt-1" onClick={handleIsOpen}>
            {isOpen ? (
              <XMarkIcon className="w-7 h-7 text-white" />
            ) : (
              <Bars4Icon className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isOpen
              ? 'flex flex-col fixed left-0 right-0 bottom-0 top-14 leading-10 h-52 pl-5 bg-zinc-800 pt-5 cursor-pointer z-10 animate__animated text-white animate__fadeInLeft'
              : 'hidden sm:flex text-white p-6 [&>*]:mx-5 [&>*]:cursor-pointer'
          }`}
        >
          <Link href={'/'} className="hover:text-gray-400">
            Home
          </Link>
          <Link href={'/projects'} className="hover:text-gray-400">
            Projects
          </Link>
          <Link href={'/about'} className="hover:text-gray-400">
            About
          </Link>
          <Link href={'/contacts'} className="hover:text-gray-400">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
