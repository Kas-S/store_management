import {FormEvent, useEffect, useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import {setDoc, doc} from "firebase/firestore"
import {db} from "../firebase.ts"
import {UserContext} from "../UserContext.ts"

function AddClient() {
    const [name, setName] = useState<string>(''),
          [contact, setContact] = useState<string>('')
    const user = useContext(UserContext),
          navigate = useNavigate()
    useEffect(() => {
        document.title = 'Зарегистрировать клиента'
    }, [])
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const cid = (Date() + Math.random()).toString()
        setDoc(doc(db, "clients", cid),
            {
                name: name,
                contact: contact,
                admin: user?.displayName,
                regDate: new Date().toISOString(),
                cid: (Date() + Math.random()).toString()
            }).then(() => {
                navigate("/clients")
        })
    }

    return (
        <main>
            <form className="flex flex-col items-center justify-center w-full text-center gap-4 font-bold" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="client_name" className="text-xl">Имя клиента: </label><br/>
                    <input type="text" name="client_name" id="client_name" placeholder="Имя клиента" className="xs:w-[50vw] h-10 rounded border border-black px-3" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="client_contact" className="text-xl">Контакт клиента(Номер телефона): </label><br/>
                    <input type="text" name="client_contact" id="client_contact" placeholder="Контакт клиента" className="xs:w-[50vw] h-10 rounded border border-black px-3" onChange={(e) => setContact(e.target.value)}/>
                </div>
                <button type="submit" className="p-3 rounded bg-blue-400 text-white font-bold">Зарегистрировать</button>
            </form>
        </main>
    )
}

export default AddClient