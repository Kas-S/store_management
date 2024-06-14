import {Link} from "react-router-dom"

function MenuItems() {
    const items = [
        ['/profile', "Профиль"],
        ['/store', 'Остатки'],
        ['/history', 'История'],
        ['/price', 'Прайс'],
        ['/sell', 'Продажа'],
        ['/supply', 'Поступление']
    ]
    return (
        <ul>
            {items.map((item) => (
                <li className="mb-7 border-b border-slate-500 text-xl font-sans font-medium"><Link to={item[0]} className="w-full p-3 ">{item[1]}</Link></li>
            ))}
        </ul>
    )
}

export default MenuItems