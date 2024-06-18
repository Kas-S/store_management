import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {getDocs, collection} from "firebase/firestore"
import {db} from "../firebase.ts"

type Client = {
    name: string,
    contact: string,
    cid: string,
    admin: string,
    regDate: string
}

function Clients() {
    const [renderedClients, setRenderedClients] = useState<JSX.Element[]>([])
    useEffect(() => {
        document.title = "Клиенты"
        getDocs(collection(db, "clients"))
            .then((res) => {
                const clients: Client[] = []
                res.forEach((doc) => {
                    clients.push(doc.data() as Client)
                })
                setRenderedClients(clients.map((client) => {
                    const buttons = [
                        ['Детали', '/clients/' + client.cid, "bg-emerald-600"],
                        ['Изменить', '/clients/edit/' + client.cid, "bg-amber-500"],
                        ['Удалить', '/clients/delete/' + client.cid, "bg-red-600"]
                    ]
                    return (
                        <tr className="pt-4 text-xl" key={client.cid}>
                            <td className="text-center pt-4 pb-4 border-2 border-solid">{client.name}</td>
                            <td className="text-center border-2 border-solid">{client.contact}</td>
                            <td className="border-2 border-solid text-center text-lg">
                                {buttons.map((button) => (
                                    <Link key={button[0]} to={button[1]} className={"p-3 rounded text-white mr-1 font-bold " + button[2]}>{button[0]}</Link>
                                ))}
                            </td>
                        </tr>
                    )
                }))

            })
    }, [])
    return (
        <main className="flex flex-col items-center px-48">
            <h1 className="font-bold text-2xl">Клиенты</h1>
            <div className="flex w-full justify-end items-end">
                <Link to="/clients/new" className="p-3 font-bold bg-emerald-500 text-white rounded-lg">Добавить клиента</Link>
            </div>
            <table className="w-full border-2 mt-4 border-solid">
                <thead>
                    <tr>
                        <th className="pt-4 border-2 border-solid w-[33.33%]">Имя</th>
                        <th className="border-2 border-solid w-[33.33%]">Контакт</th>
                        <th className="pr-3 border-2 border-solid">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedClients}
                </tbody>
            </table>
        </main>
    )
}

export default Clients