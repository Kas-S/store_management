import {Link} from "react-router-dom"
import {Menu} from "../index.ts"

function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 z-50 bg-gray-100 w-full pt-5 pb-5 pr-6 pl-6 shadow-lg flex justify-between items-center">
                <Link to="/" className="font-bold text-4xl">SM</Link>
                <Menu/>
            </nav>
            <br/><br/><br/><br/>
        </>
    )
}

export default Navbar