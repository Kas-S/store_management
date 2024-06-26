import {PropsWithChildren} from "react"

type tableProps = {
    fields: string[],
    cell_width: string
}

function Table(props: PropsWithChildren<tableProps>) {
    return (
        <table className="w-full border-2 mt-4 border-solid text-center">
            <thead>
                <tr>
                    {props.fields.map(field => (
                        <th className={"pt-4 border-2 border-solid " + props.cell_width} key={field}>{field}</th>
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