import { Link } from "react-router-dom"
function Navbar() {
    return (
        <nav>
            <ul className="flex  items-center space-x-2 text-lg">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#services">services</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
