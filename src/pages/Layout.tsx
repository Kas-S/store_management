import {useEffect} from "react"
import {Outlet, useNavigate} from "react-router-dom"
import {onAuthStateChanged} from "firebase/auth"
import {Navbar} from "../components"
import {auth} from "../firebase.ts"

function Layout() {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, () => {
            if (!auth.currentUser) return navigate("/login")
        })
    }, [])
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