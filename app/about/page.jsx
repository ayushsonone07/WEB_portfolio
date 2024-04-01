import React from "react";
import Link from "next/link";

const aboutPage = () => {
  return (
    <div className="lg:mx-16 mx-20">
      <h1 className="lg:text-7xl from-zinc-700 font-bold text-center text-3xl m-0 flex-start ">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About me
        </span>
      </h1>
      <br />
      <h3>
        My name is Ayush. i am a Passionate web developer. who eager to learn
        new things. i have just completed my graduation from Global Engneering
        collage jabalpur fom Electronics and communication Engneering
      </h3>
      <br />
      <h3>
        Strong in design and integration with intuitive problem-solving skills.
        Proficient in C, PHP, JAVASCRIPT, SQL and NoSQL.
        <br /> I have also learnt some modern technologies like REACT JS, NEXT
        js, GIT, LINUX. Passionate about implementing and launching new
        projects. Ability to translate business requirements into technical
        solutions.
      </h3>
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full content-center items-center justify-center ">
        <Link href="https://drive.google.com/file/d/1-FdPWz9Wvbc4cCJOjI6s-c0JAZU1gaix/view?usp=drivesdk">
          Resume
        </Link>
      </button>
    </div>
  );
};

export default aboutPage;
