import {Link} from "react-router-dom"

function MenuItems() {
    const items = [
        ['/profile', "Профиль"],
        ['/store', 'Остатки'],
        ['/history', 'История'],
        ['/price', 'Прайс'],
        ['/clients', 'Клиенты'],
        ['/sell', 'Продажа'],
        ['/supply', 'Поступление'],
        ['/logout', 'Выйти']
    ]
    return (
        <ul>
            {items.map((item) => (
                <li className="mb-7 border-b border-slate-500 text-xl font-sans font-medium" key={item[1]}><Link to={item[0]} className="w-full p-3 ">{item[1]}</Link></li>
            ))}
        </ul>
    )
}

export default MenuItems