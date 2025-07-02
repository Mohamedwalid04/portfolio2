
function Projects() {
    const projects = [
        {
            title: "SPA useWeather",
            image: "/public/useWeather.png",
            tech: ["ReactJS", "Tailwind", "Restfull API"],
            live: "https://useweathersearch.netlify.app/",
        },
        {
            title: "Landing Page Viva Decor",
            image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/671d27e1fae585066c1de922/screenshot_2024-10-26-17-33-50-0000.webp&fit=cover&h=500&q=40&w=800",
            tech: ["HTML", "CSS"],
            live: "https://viva-decor.netlify.app/",
        },
        {
            title: "Landing Page Solar System-company",
            image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66f42515e1ae4804c67fadf1/screenshot_2024-09-25-14-58-57-0000.webp&fit=cover&h=500&q=40&w=800",
            tech: ["HTML", "CSS"],
            live: "https://solar-system-company.netlify.app/",
        },
        {
            title: "To Do List",
            image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6717ed1852118e8f35667fe0/screenshot_2024-10-22-18-21-37-0000.webp&fit=cover&h=500&q=40&w=800",
            tech: ["HTML", "CSS", "JS"],
            live: "https://solar-system-company.netlify.app/",
        },
        {
            title: "SPA usePopCorn",
            tech: ["ReactJS", "Restfull API"],
            image: "/public/usepopcorn.png",
            live: "https://usepopcorn-for-movies.netlify.app/",
        },
        {
            title: "Hosting Website Gakwar",
            tech: ["HTML", "CSS", "JavaScript"],
            image: "/public/gakwar.png",
            live: "https://gakwar.netlify.app/",
        },
        {
            title: "Trading Website Exclsive",
            tech: ["NextJS", "Strpie", "Restfull API", "TailwindCSS", "NextAuth"],
            image: "/public/Product Details page.jpg",
            live: "https://exclusive-rouge.vercel.app/",
        }
    ];


    return (
        <section id="projects" className="bg-[#1b1f24] py-16 px-6 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-blue-500 text-xl font-semibold text-center mb-4">PROJECTS</h2>
                <p className="text-center text-gray-300 mb-12">Some of the work I've built recently</p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => window.open(project.live, '_blank')}
                            className="bg-[#262d34] cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-white text-lg font-bold mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-600 text-xs text-white px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Projects
