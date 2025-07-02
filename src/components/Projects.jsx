import { useState } from "react";
import { Link } from "react-router-dom";


function Projects() {
    const [hover, setHover] = useState(null)
    const projects = [
        {
            title: "SPA usePopCorn",
            tags: ["React JS", "Restfull API"],
            image: "/usepopcorn.png",
            Demo: "https://usepopcorn-for-movies.netlify.app/",
        },
        {
            title: "Hosting Website Gakwar",
            tags: ["HTML & CSS", "JavaScript"],
            image: "/gakwar.png",
            Demo: "https://gakwar.netlify.app/",
        },
        {
            title: "Trading Website Exclsive",
            tags: ["NextJS", "Strpie", "Restfull API", "TailwindCSS", "NextAuth"],
            image: "/Product Details page.jpg",
            Demo: "https://exclusive-rouge.vercel.app/",
        }
    ];
    return (
        <section id="projects" className="text-white py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Sidebar */}
                <div className="col-span-1 space-y-6">
                    <p className="text-blue-400 uppercase font-semibold">My Portfolio</p>
                    <h2 className="text-2xl font-bold leading-snug">
                        Take a look at the latest projects I’ve done
                    </h2>
                    <button className="flex items-center space-x-3 p-2 rounded-md font-pixel text-2xl transition-all bg-cyan-700 cursor-pointer hover:bg-cyan-900 group">
                        <Link to={"/projects"}>Browse all Projects</Link>
                        <span className="text-base relative  group-hover:animate-moving ">&gt;</span>
                    </button>
                </div>

                {/* Project Cards */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((proj, index) => (
                        <div key={index} onClick={() => window.open(proj.Demo, '_blank')} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} className={`bg-[#1E293B] p-4 rounded-2xl ${hover !== null && hover !== index && "opacity-50"} space-y-4 shadow-md cursor-pointer hover:scale-[1.02] transition`}>
                            <div className="flex flex-wrap gap-2">
                                {proj.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h4 className="text-lg font-semibold">{proj.title}</h4>
                            <img src={proj.image} alt={proj.title} className="rounded-lg mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
