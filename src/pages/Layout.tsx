import {Outlet, useNavigate} from "react-router-dom"
import {Navbar} from "../components"
import {useContext, useEffect} from "react";
import {UserContext} from "../UserContext.ts";

function Layout() {
    const user = useContext(UserContext),
        navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user]);
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout