import { FaArrowDown } from "react-icons/fa6"
import { Link } from "react-router-dom"
function MainSection() {
    return (
        <section className="flex items-center justify-evenly flex-wrap space-y-4 pt-3.5">
            <div className="space-y-3">
                <h1 className="font-bold text-5xl">
                    Mohamed Walid
                </h1>
                <p className="leading-6 text-justify text-lg w-40 font-pixel text-parag md:w-80">
                    Front-End Developer | Expert in React & Next.js | Building Sleek E-Commerce & Dashboards | UI/UX to Code | API Integration | .NET Collaboration
                </p>
                <button className="flex items-center space-x-3 p-2 rounded-md font-pixel text-2xl transition-all bg-cyan-700 cursor-pointer hover:bg-cyan-900 group">
                    <a href={"/Cv.pdf"} download>Download CV</a>
                    <span className="text-base relative  group-hover:animate-download "> <FaArrowDown />
                    </span>
                </button>
            </div>
            <div className="rounded-full w-[300px] sm:w-[450px]">
                <img className="rounded-full w-full object-cover" src="./photo_2025-06-30_16-22-36.jpg" alt="Mohamed-Walid" />
            </div>
        </section>
    )
}

export default MainSection
