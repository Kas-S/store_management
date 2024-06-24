import {useState} from "react"
import {FormSelect} from "../components"
import {useDivideClientsByNameAndID, useFetchClients} from "../hooks"

function Sell() {
    const [clientNames, clientIDs] = useDivideClientsByNameAndID(useFetchClients())
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [client, setClient] = useState<string>("")
    return (
        <form className="flex items-center flex-col">
            <h1>Продажа</h1>
            <FormSelect name="client" title="Клиент: " options={clientNames} values={clientIDs} handler={setClient}/>
        </form>
    )
}

export default Sell