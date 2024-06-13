import {Outlet} from "react-router-dom"
import {Navbar} from "../components"

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout