import {Table} from "../components"
import {useFetchProducts} from "../hooks"

function Price() {
    const products = useFetchProducts()
    return (
        <div className="mx-auto px-5">
            <h1 className="text-2xl text-center font-bold">Прайс лист</h1>
            <Table fields={["Название", "Группа", "Цена"]} cellWidth="w-1/3">
                {products.map((v) => (
                    <tr key={v.id}>
                        <td className="border-2 border-solid">{v.name}</td>
                        <td className="border-2 border-solid">{v.group}</td>
                        <td className="border-2 border-solid">{v.price}</td>
                    </tr>
                ))}
            </Table>
        </div>
    )
}

export default Price