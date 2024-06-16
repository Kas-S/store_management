import {useEffect, useContext} from "react"
import {useNavigate} from "react-router-dom"
import {UserContext} from "../UserContext.ts"

function Home() {
    const user = useContext(UserContext),
          navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user]);
    return (
        <h1 className="text-9xl">Hello World</h1>
    )
}

export default Home