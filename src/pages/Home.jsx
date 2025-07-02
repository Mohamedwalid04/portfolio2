import { HiArrowSmDown } from "react-icons/hi"
import MainSection from "../components/MainSection"
import SkillsSection from "../components/SkillsSection"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Services from "../components/Services"

function Home() {
    return (
        <div className="space-y-10">
            <MainSection />
            <a href="#skills" className="centerElements cursor-pointer  size-8 h-[50px] animate-bounce border-2 border-[#9C9C9C] rounded-l-xl rounded-r-xl relative left-[50%]">
                <HiArrowSmDown className="text-cyan-700  text-5xl" />
            </a>
            <SkillsSection />
            <Projects />
            <Services />
            <Contact />
        </div>
    )
}

export default Home
