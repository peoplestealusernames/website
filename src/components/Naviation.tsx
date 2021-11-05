import { Link } from "react-router-dom"

const items = [
    { path: '/', label: 'Main' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' }
]

export function Navigation() {
    return (
        <div className="Navigation-Bar">
            <ul>
                {items.map(item => {
                    return (
                        <li key={item.path} >
                            <Link to={item.path} >
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul >
        </div >
    )
}
