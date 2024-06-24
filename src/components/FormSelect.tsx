import {formSelect} from "../types.ts"

function FormSelect(props: formSelect) {
    return (
        <div>
            <label htmlFor={props.name} className="text-xl">{props.title}</label><br/>
            <select name={props.name} id={props.name}
                   className="xs:w-[50vw] h-10 rounded border border-black px-3"
                   onChange={(e) => props.handler(e.target.value)}>
                {props.options.map((v, i) => (
                    <option key={i} value={props.values[i]}>{v}</option>
                ))}
            </select>
        </div>
    )
}

export default FormSelect