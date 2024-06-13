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
                <li><Link to={item[0]}>{item[1]}</Link></li>
            ))}
        </ul>
    )
}

export default MenuItems