import {Dispatch, SetStateAction} from "react"

type formInput = {
    title: string,
    name: string,
    type: string,
    handler: Dispatch<SetStateAction<string>>
}

function FormInput(props: formInput) {
    return (
        <div>
            <label htmlFor={props.name} className="text-xl">{props.title}</label><br/>
            <input type={props.type} name={props.name} id={props.name} placeholder={props.title}
                   className="xs:w-[50vw] h-10 rounded border border-black px-3"
                   onChange={(e) => props.handler(e.target.value)}/>
        </div>
    )
}

export default FormInput