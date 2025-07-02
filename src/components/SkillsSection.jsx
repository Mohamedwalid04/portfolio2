import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";
import { SiRedux } from "react-icons/si";
function SkillsSection() {
    const slides = [
        {
            icon: <FaHtml5 />,
            title: "HTML & CSS",
            content: "Building responsive and accessible web interfaces using semantic HTML and modern CSS techniques including Flexbox, Grid, and animations.",
        },
        {
            icon: <IoLogoJavascript />,
            title: "JavaScript",
            content: "Creating interactive user experiences with clean, modular JavaScript code, including ES6+ features and asynchronous operations.",
        },
        {
            icon: <RiTailwindCssFill />,
            title: "TailwindCSS",
            content: "Building responsive, modern user interfaces using Tailwind CSS utility-first framework. Capable of rapidly styling components with consistent design systems, optimizing for performance and maintainability.",
        },
        {
            icon: <FaReact />,
            title: "ReactJS",
            content: "Developing dynamic, component-based user interfaces using React, with hooks, state management, and routing integration.",
        },
        {
            icon: <SiRedux />,
            title: "Redux & Redux ToolKit",
            content: "Managing complex application state using Redux and Redux Toolkit, with optimized slices, async actions, and seamless integration into scalable React applications.",
        },
        {
            icon: <RiNextjsFill />,
            title: "NextJS",
            content: "Building fast, SEO-optimized web applications with server-side rendering (SSR), static site generation (SSG), and API routes.",
        },
        {
            icon: <AiOutlineDotNet />,
            title: "DotNet Core",
            content: "Creating scalable and secure back-end systems using C# and .NET Core, with RESTful API development and clean architecture patterns.",
        },
        {
            icon: <DiMsqlServer />,
            title: "SQL Server",
            content: "Designing and managing relational databases, writing complex queries, stored procedures, and optimizing performance in SQL Server.",
        }
    ]
    return (
        <section id="skills" className="mt-7  space-y-5">
            <div className="flex justify-between items-center">
                <p className="text-blue-400 uppercase font-semibold">Skills</p>
                <div className="centerElements mt-4 gap-4">
                    <button className="custom-prev cursor-pointer size-14 flex justify-center items-center  bg-gray-700 text-white transition-all duration-300  rounded-full hover:bg-cyan-700"> ◀ </button>
                    <button className="custom-next cursor-pointer size-14 flex justify-center items-center   bg-gray-700  text-white transition-all duration-300  rounded-full hover:bg-cyan-700"> ▶</button>
                </div>
            </div>
            <div className="grid relative">
                {/* Custom Navigation Buttons */}


                {/* Swiper Component */}
                <Swiper
                    spaceBetween={30}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mySwiper"
                >
                    {slides.map((el) => <SwiperSlide className="slider space-y-2 animate-appear">
                        <div className=" centerElements shadow-md size-16 text-4xl rounded-full bg-cyan-900 text-white">
                            {el.icon}
                        </div>
                        <h3 className="text-xl">
                            {el.title}
                        </h3>
                        <p className="leading-6 text-justify text-lg  font-pixel text-parag">
                            {el.content}
                        </p>
                    </SwiperSlide>)}

                </Swiper>
            </div>
        </section>
    )
}

export default SkillsSection
