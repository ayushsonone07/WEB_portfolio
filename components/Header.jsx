"use client"
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <nav>
      <div className="grid grid-cols-12 gap-2">
        <h1 className="sm:col-span-9 col-span-10 m-7 ">
          <Link href="/" className="font-bold sm:text-2xl text-lg">
            Portfolio/ ayushsonone07
          </Link>
        </h1>
        <div className="sm:col-span-2 sm:block hidden py-8">
          <Link href="/" className="hover:text-blue-700 mx-4 font-semibold">Home</Link>
          <Link href="/projects" className="hover:text-blue-700 mx-4 font-semibold">Projects</Link>
          <Link href="/about" className="hover:text-blue-700 mx-4 font-semibold">About</Link>
        </div>

        {
          show?
              <div className="backdrop-blur-xl col-span-12 absolute h-screen w-screen z-10 transition-all duration-200">
                <ul className="flex flex-col item-center space-y-11 mt-48">
                  <h1 className="text-center font-bold text-4xl text-black" onClick={()=>{setShow(false)}}><Link href="/">Home</Link></h1>
                  <h1 className="text-center font-bold text-4xl text-black" onClick={()=>{setShow(false)}}><Link href="/projects">Projects</Link></h1>
                  <h1 className="text-center font-bold text-4xl text-black" onClick={()=>{setShow(false)}}><Link href="/about">About</Link></h1>
                  <h1 className="ml-48 pt-20 font-bold text-4xl text-black" onClick={()=>{setShow(false)}}><RxCross2 /></h1>
                </ul>
              </div>:
              <button className="sm:hidden col-span-2 transition delay-1000 duration-300 ease-in-out" onClick={()=>{setShow(true)}}>
                <CiMenuFries 
                  size="25px"
                  color="black"
                />
              </button>
        }

      </div>

    </nav>
  );
};

export default Header;
