import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "https://4kwallpapers.com/images/walls/thumbs/9022.png",
    title: "Calculator",
    description: "A Simple Calculator WebAPP using HTML, CSS And JS",
    link: "https://ayushsonone07.github.io/calculator/",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/colored-circles-abstract-background-free-photo.jpg?w=1024&quality=50",
    title: "TODO_List",
    description: "A simple ToDo list Project made using HTML, CSS and JS",
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
    description: "Jokeran is Simple app which tells a hindi joke when you enter into that web page.",
    link: "https://ayushsonone07.github.io/joke/",
  },
  {
   id: 5,
   image:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2Mi1hdW0tMDEta2x4Y3AwNTMuanBn.jpg",
   title: "Promptia",
   description: "A FullStack Web App Project where you can Login with your Google Account and after that you can share, Edit and Delete your thoughts.",
   link: "https://promptia-alpha.vercel.app",
  },
  {
    id: 7,
    image:"https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Direct Whatsapp",
    description: "Direct whatsapp is a service which allows users to chat Directly. without saving the Phone number.",
    link: "https://ayushsonone07.github.io/DirectWhatsapp/",
  },
];

const ProjectsPage = () => {
  return (
    <div className="w-full grid  place-items-center ">
      <h1 className="lg:text-7xl from-zinc-700 font-bold text-center text-3xl my-8 flex-start ">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div className="w-4/5	m-3">
        <ul className="lg:grid lg:grid-cols-3 lg:gap-6">
          {projects.toReversed().map((project) => (
            <div className="drop-shadow-xl hover:scale-110 transform transition ease-in-out duration-1000 rounded-xl b mx-4">
              <li key={project.id} className="mb-4 item-center border-solid ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-48 w-96 lg:w-full mb-2 rounded-xl p-5"
                />
                <h2 className="text-xl font-bold text-center">
                  {project.title}
                </h2>
                <p className="text-center">{project.description}</p>
                <div className="flex flex-col items-center justify-center mt-4 pb-5">
                  <button class="bg-cyan-500 hover:bg-blue-700 text-white ease-in-out duration-300 font-bold py-2 px-4 rounded content-center">
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
