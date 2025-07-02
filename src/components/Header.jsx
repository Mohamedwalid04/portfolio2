import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Header() {
    return (
        <header className="bg-head-fotter w-full  flex flex-col justify-between space-y-3 items-center p-3 sm:flex-row">
            <Link to={"/"}>
                <h1 className="text-4xl font-bold font-pixel" >Mohamed</h1>
            </Link>
            <Navbar />
        </header>
    )
}

export default Header
