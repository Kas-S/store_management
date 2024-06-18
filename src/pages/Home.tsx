import {useEffect} from "react"

function Home() {
    useEffect(() => {
        document.title = "Store Management"
    }, []);
    return (
        <h1 className="text-9xl">Hello World</h1>
    )
}

export default Home