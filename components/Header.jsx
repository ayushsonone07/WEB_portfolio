import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="m-7">
      <div className="lg:flex sm:text-center">
        <h1 className="sm:text-center">
          <Link href="/" className="font-bold text-xl">
            Portfolio/ ayushsonone07
          </Link>
        </h1>
        <div className="lg:ml-auto flex gap-6 sm:grid sm:grid-cols-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
