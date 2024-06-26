import {PropsWithChildren} from "react"

type tableProps = PropsWithChildren<{
    fields: string[]
}>

function Table(props: tableProps) {
    return (
        <table className="w-full border-2 mt-4 border-solid">
            <thead>
                <tr>
                    {props.fields.map(field => (
                        <th className={`pt-4 border-2 border-solid w-1/${props.fields.length}`}>{field}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Table