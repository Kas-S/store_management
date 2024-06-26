import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {getDocs, collection, deleteDoc, doc} from "firebase/firestore"
import {db} from "../firebase.ts"
import {Client} from "../types.ts"
import {Table} from "../components"

function Clients() {
    const [clients, setClients] = useState<Client[]>([])
    useEffect(() => {
        document.title = "Клиенты"
        getDocs(collection(db, "clients"))
            .then((res) => {
                const c: Client[] = []
                res.forEach((doc) => {
                    c.push(doc.data() as Client)
                })
                setClients(c)
            })
    }, [])
    const deleteClient = async(cid: string) => {
        await deleteDoc(doc(db, `clients/${cid}`)).then(() => {
            const id = clients.findIndex((c) => (c.cid === cid))
            setClients(clients.slice(0, id).concat(clients.slice(id + 1)))
        })
    }
    const renderClients = (clients: Client[]) => {
        return clients.map((client) => {
            const buttons = [
                ['Детали', '/clients/' + client.cid, "bg-emerald-600"],
                ['Изменить', '/clients/edit/' + client.cid, "bg-amber-500"],
            ]
            return (
                <tr className="pt-4 text-xl" key={client.cid}>
                    <td className="text-center pt-4 pb-4 border-2 border-solid w-auto">{client.name}</td>
                    <td className="text-center border-2 border-solid w-auto">{client.contact}</td>
                    <td className="border-2 border-solid text-center text-lg w-auto">
                        {buttons.map((button) => (
                            <Link key={button[0]} to={button[1]} className={"p-3 rounded text-white mr-1 font-bold " + button[2]}>{button[0]}</Link>
                        ))}
                        <button type="button" className="p-3 rounded text-white mr-1 font-bold bg-red-500" onClick={() => deleteClient(client.cid)}>Удалить</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <main className="flex flex-col items-center px-48">
            <h1 className="font-bold text-2xl">Клиенты</h1>
            <div className="flex w-full justify-end items-end">
                <Link to="/clients/new" className="p-3 font-bold bg-emerald-500 text-white rounded-lg">Добавить клиента</Link>
            </div>
            <Table fields={["Имя", "Контакт", "Действия"]} cellWidth="w-1/3">
                {renderClients(clients)}
            </Table>
        </main>
    )
}

export default Clients