import {Client} from "../types.ts"

function useDivideClientsByNameAndID(clients: Client[]) {
    const names: string[] = [],
          CID: string[] = []
    clients.forEach((client) => {
        names.push(client.name)
        CID.push(client.cid)
    })
    return [names, CID]
}

export default useDivideClientsByNameAndID