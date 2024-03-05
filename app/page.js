import Badges from "@/components/Badges";
import Motion, { Heading1, Heading } from "@/components/Motion";
import Slider from "@/components/Swipes";
import Image from 'next/image'
import Profile from '@/public/avtar.png'
import Skills from "@/components/Skills";

export const metadata = {
  title: 'Portfolio/ayushsonone07',
  description: 'Portfolio website of Ayush Sonone',
}

const Home = () => {
  return (
    <div>
      <div className="grid h-screen place-items-center">
          <div className="grid grid-cols-12 place-items-center">
            <div className="sm:col-span-8 col-span-12"> 
              <Heading/>
              <Motion/>
              <Heading1/>
              <p className="text-center hover:text-slate-500 sm:visible invisible pt-28">scroll down to see more &darr;</p>
            </div>
            <div className="sm:col-span-4 col-span-12">
              <Image src={Profile} className="sm:w-[450px] sm:h-[450px] w-[250px] h-[250px] shadow-lg rounded-full mb-32"/>
            </div>
          </div>
      </div>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <Skills/>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="grid grid-cols-12">
        <div className="sm:col-span-6 col-span-12">
          <h1 className="text-center text-3xl font-bold my-8">My badges</h1>
          <Badges/>
        </div>
        <div className="sm:col-span-6 col-span-12">
          <h1 className="text-center text-3xl font-bold my-8"> Certifications </h1> 
          <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Home;
