import {FormEvent, useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {getDoc, updateDoc, doc} from "firebase/firestore"
import {db} from "../firebase.ts"
import {Client} from "../types.ts"

function EditClient() {
    const {cid} = useParams(),
          [client, setClient] = useState<Client | null>(null),
          [name, setName] = useState<string>(''),
          [contact, setContact] = useState<string>(''),
          navigate = useNavigate()
    useEffect(() => {
        getDoc(doc(db, `clients/${cid}`)).then((doc) => {
            setClient(doc.data() as Client)
            setName(doc.data()?.name)
            setContact(doc.data()?.contact)
        })
    }, [cid])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateDoc(doc(db, `clients/${cid}`), {
            name: name,
            contact: contact,
            regDate: client?.regDate,
            admin: client?.admin,
            cid: cid,
        }).then(() => {
            navigate("/clients")
        })
    }

    return (
        <main>

            <form className="flex flex-col items-center justify-center w-full text-center gap-4 font-bold"
                  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="client_name" className="text-xl">Имя клиента: </label><br/>
                    <input type="text" name="client_name" id="client_name" placeholder="Имя клиента"
                           className="xs:w-[50vw] h-10 rounded border border-black px-3"
                           onChange={(e) => setName(e.target.value)}
                           defaultValue={client?.name}/>
                </div>
                <div>
                    <label htmlFor="client_contact" className="text-xl">Контакт клиента(Номер телефона): </label><br/>
                    <input type="text" name="client_contact" id="client_contact" placeholder="Контакт клиента"
                           className="xs:w-[50vw] h-10 rounded border border-black px-3"
                           onChange={(e) => setContact(e.target.value)}
                           defaultValue={client?.contact}/>
                </div>
                <button type="submit" className="p-3 rounded bg-blue-400 text-white font-bold">Сохранить</button>
            </form>
        </main>
    )
}

export default EditClient