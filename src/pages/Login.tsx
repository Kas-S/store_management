import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {useState, FormEvent, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {auth} from "../firebase.ts"
import {FormInput} from "../components"

function Login() {
    const [login, setLogin] = useState(""),
          [password, setPassword] = useState(""),
          navigate = useNavigate()
    useEffect(() => {
        document.title = "Вход"
        onAuthStateChanged(auth, () => {
            if (auth.currentUser) {
                navigate("/")
            }
        })
    }, [])
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
                <FormInput name="login" type="login" title="Логин: " handler={setLogin}/>
                <FormInput name="password" type="password" title="Пароль: " handler={setPassword}/>
                <button type="submit" className="border-black p-3 font-bold border rounded hover:bg-black hover:text-white transition-all ease-linear">Войти</button>
            </form>
        </main>
    )
}

export default Login