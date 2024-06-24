import {FormEvent, useEffect, useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import {setDoc, doc} from "firebase/firestore"
import {db} from "../firebase.ts"
import {UserContext} from "../UserContext.ts"
import {FormInput} from "../components"

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
        const cid = (Date.now() + Math.random()).toString()
        setDoc(doc(db, "clients", cid),
            {
                name: name,
                contact: contact,
                admin: user?.displayName,
                regDate: new Date().toISOString(),
                cid: cid
            }).then(() => {
                navigate("/clients")
        })
    }

    return (
        <main>
            <form className="flex flex-col items-center justify-center w-full text-center gap-4 font-bold" onSubmit={handleSubmit}>
                <FormInput name="client_name" type="text" title="Имя клиента: " handler={setName}/>
                <FormInput name="client_contact" type="text" title="Контакт клиента(Номер телефона): " handler={setContact}/>
                <button type="submit" className="p-3 rounded bg-blue-400 text-white font-bold">Зарегистрировать</button>
            </form>
        </main>
    )
}

export default AddClient