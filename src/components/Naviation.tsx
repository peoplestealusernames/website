import { Tab, Tabs } from "@mui/material"
import { Link } from "react-router-dom"

const items = [
    { path: '/', label: 'Main' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' }
]

export function Navigation() {
    return (
        <Tabs centered sx={{
            p: 1,
            display: "flex",
            textAlign: "center", verticalAlign: "top"
        }}>
            {items.map(item => {
                return (
                    <Tab component={Link} label={item.label} to={item.path}
                        sx={{
                            verticalAlign: "middle", textAlign: "center"
                        }}
                    ></Tab>
                )
            })}
        </Tabs>
    )
}
