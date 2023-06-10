import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "https://4kwallpapers.com/images/walls/thumbs/9022.png",
    title: "Calculator",
    description: "This is project 1.",
    link: "https://ayushsonone07.github.io/calculator/",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/colored-circles-abstract-background-free-photo.jpg?w=1024&quality=50",
    title: "TODO_List",
    description: "This is project 2.",
    link: "https://ayushsonone07.github.io/TODO_List/",
  },
  {
    id: 3,
    image:
      "https://thumbs.dreamstime.com/b/abstract-music-background-vinyl-mixer-64824483.jpg",
    title: "QR CODE Generator",
    description:
      " a simple QR Code generator web app that uses api to instantlt generate QR codes",
    link: "https://ayushsonone07.github.io/QR_CODE-_Generator/",
  },
  {
    id: 4,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1072-037-c-kvhh08mp.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d1140632e48f03cd69f599fc6433c00a",
    title: "jokeran",
    description: "This is project 4.",
    link: "https://ayushsonone07.github.io/joke/",
  },
];

const ProjectsPage = () => {
  return (
    <div className="w-full grid  place-items-center ">
      <h1 className="lg:text-7xl from-zinc-700 font-bold text-center text-3xl m-0 flex-start ">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div className="bg-slate-50 w-4/5	 ">
        <ul className="lg:grid lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <div className="drop-shadow-xl hover:scale-110 transform transition duration-4">
              <li key={project.id} className="mb-4 item-center border-solid ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-48 w-96 lg:w-full mb-2 rounded"
                />
                <h2 className="text-xl font-bold text-center">
                  {project.title}
                </h2>
                <p className="text-center">{project.description}</p>
                <div className="flex flex-col items-center justify-center mt-4">
                  <button class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
                    <Link href={project.link}>See project</Link>
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
