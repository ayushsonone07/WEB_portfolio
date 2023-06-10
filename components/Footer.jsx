import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  GoMail,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-fit w-full">
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h1 className="text-center text-5xl font-bold my-8">Contact me here</h1>
      <div className="flex gap-4 items-center justify-center">
        <Link href="https://www.instagram.com/ayushsonone07/">
          <FaInstagram />
        </Link>
        <Link href="https://www.facebook.com/aayush.sonone.7">
          <FaFacebookF />
        </Link>
        <Link href="https://github.com/ayushsonone07">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/ayush-sonone-4a3100220/">
          <FaLinkedin />
        </Link>
        <Link href="https://twitter.com/sononeayush07">
          <FaTwitter />
        </Link>
        <Link href="https://www.youtube.com/@ayushsonone4772">
          <FaYoutube />
        </Link>
      </div>
      <br />
      <br />
      <div className="flex items-center justify-center">
        <FaTelegram />
        <Link href="https://t.me/Ayushsonone07" className="text-xl">
          Telegram : Ayushsonone07
        </Link>
      </div>
      <p className="text-center mt-72">
        &copy; Design by: <a href="/">ayushsonone07</a>
      </p>
    </footer>
  );
};

export default Footer;
