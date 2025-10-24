'use client';

import React,{FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import '../styles/globals.css';
import Btn from './Button';
import Search from './Search';


const Nav:FC = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-12 shadow-md bg-white">
      <Link href="#" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo.png"
          width={30}
          height={30}
          alt="Our Logo"
        />
        <h1 className="text-2xl font-bold text-gray-700">BYTE</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Btn text="Home" />
        <Btn text="Courses" />
        <Btn text="Live Batches"/>
        <Btn text="Teachers" />
        <Btn text="About" />
        <Btn text="Contact" />
        <Search/>
      </div>

      <div className="flex items-center gap-4">

        <Btn text="Language" variant="outline" />
        <Btn text="Login" />
        <Btn text="Sign Up" variant="filled" />
      </div>
    </nav>
  );
}
export default Nav;