import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {

  return (
    <footer className="w-full bg-black">
      <hr className="w-full h-1 mx-auto my-10 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h1 className="text-center text-5xl font-bold mt-10 text-white">Contact me here</h1>
      <div className="flex gap-6 items-center justify-center text-white mt-24">
        <Link href="https://www.instagram.com/ayushsonone07/" className="hover:text-pink-400 ease-in-out duration-1000">
          <FaInstagram size={32}/>
        </Link>
        <Link href="https://www.facebook.com/aayush.sonone.7" className="hover:text-blue-600 ease-in-out duration-1000">
          <FaFacebookF size={32}/>
        </Link>
        <Link href="https://github.com/ayushsonone07" className="hover:text-gray-400 ease-in-out duration-1000">
          <FaGithub size={32}/>
        </Link>
        <Link href="https://www.linkedin.com/in/ayush-sonone-4a3100220/" className="hover:text-blue-400 ease-in-out duration-1000">
          <FaLinkedin size={32}/>
        </Link>
        <Link href="https://twitter.com/sononeayush07" className="hover:text-blue-500 ease-in-out duration-1000">
          <BsTwitterX size={32}/>
        </Link>
        <Link href="https://www.youtube.com/@ayushsonone4772" className="hover:text-red-500 ease-in-out duration-1000">
          <FaYoutube size={32}/>
        </Link>
      </div>
      <br />
      <br />
      <div className="items-center justify-center sm:flex">
        <Link href="https://api.whatsapp.com/send/?phone=%2B918349307304&text&type=phone_number&app_absent=0" className="flex text-xl text-black bg-white rounded-full hover:bg-green-300 ease-in-out duration-1000 px-5 py-2 mx-5 my-6">
          <FaWhatsapp size={25}/> <span className="px-5"><strong>Whatsapp</strong> : ayushonone07</span>
        </Link>
        <Link href="https://t.me/Ayushsonone07" className="flex text-xl text-black bg-white rounded-full hover:bg-cyan-300 ease-in-out duration-1000 px-5 py-2 mx-5 my-6">
          <FaTelegramPlane size={25}/> <span className="px-5"><strong>Telegram</strong> : ayushonone07</span>
        </Link>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRrkzVjnZMcfrdQjlpwGDLdCRwxqXtgmZRdVdpwMKxcFZdMqfflbTFTNVcTzXPrDszxFDSv" className="flex text-xl text-black bg-white rounded-full hover:bg-red-300 ease-in-out duration-1000 px-5 py-2 mx-5 my-6">
          <SiGmail size={25}/> <span className="px-5"><strong>Gmail</strong> : ayushonone07</span>
        </a> 
      </div>  
      <p className="text-center mt-72">
        &copy; Design by: <a href="/">ayushsonone27@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
