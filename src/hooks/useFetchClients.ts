import {useEffect, useState} from "react"
import {Client} from "../types.ts"
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase.ts"

function useFetchClients() {
    const [clients, setClients] = useState<Client[]>([])
    useEffect(() => {
        getDocs(collection(db, "clients"))
            .then((res) => {
                const c: Client[] = []
                res.forEach((doc) => {
                    c.push(doc.data() as Client)
                })
                setClients(c)
            })
    }, [])
    return clients
}

export default useFetchClients