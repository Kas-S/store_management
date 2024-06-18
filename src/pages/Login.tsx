import {signInWithEmailAndPassword} from "firebase/auth"
import {useState, FormEvent, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {auth} from "../firebase.ts"

function Login() {
    useEffect(() => {
        document.title = "Вход"
    }, [])

    const [login, setLogin] = useState(""),
          [password, setPassword] = useState(""),
          navigate = useNavigate()

    const signIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, login, password)
            .then(() => {
                navigate('/')
            })
            .catch((error: Error) => console.error(error))
    }

    return (
        <main>
            <form onSubmit={signIn} className="flex flex-col items-center justify-center w-full pt-10 text-center gap-4">
                <div>
                    <label htmlFor="login" className="text-2xl font-bold">Логин: </label><br/>
                    <input type="login" name="login" id="login" onChange={(e) => setLogin(e.target.value)}
                           className="xs:w-[50vw] md:w-[30vw] h-10 rounded border border-black px-3"
                           placeholder="Логин"/>
                </div>
                <div>
                    <label htmlFor="password" className="text-2xl font-bold">Пароль: </label><br/>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}
                           className="xs:w-[50vw] md:w-[30vw] h-10 rounded border border-black px-3"
                           placeholder="Пароль"/>
                </div>
                <button type="submit" className="border-black p-3 font-bold border rounded hover:bg-black hover:text-white transition-all ease-linear">Войти</button>
            </form>
        </main>
    )
}

export default Login