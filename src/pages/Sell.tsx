import {useState} from "react"
import {FormSelect} from "../components"
import {useDivideClientsByNameAndID, useFetchClients} from "../hooks"

function Sell() {
    const [clientNames, clientIDs] = useDivideClientsByNameAndID(useFetchClients())
    const [client, setClient] = useState<string>("")
    console.log(client) // to fix production
    return (
        <form className="flex items-center flex-col">
            <h1>Продажа</h1>
            <FormSelect name="client" title="Клиент: " options={clientNames} values={clientIDs} handler={setClient}/>
        </form>
    )
}

export default Sell