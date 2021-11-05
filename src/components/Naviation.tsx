import { Tab, Tabs } from "@mui/material"
import { Link } from "react-router-dom"

const items = [
    { path: '/website/', label: 'Home' },
    { path: '/website/work', label: 'Work' },
    { path: '/website/contact', label: 'Contact' },
    { path: '/website/experience', label: 'Experience' },
    { path: '/website/projects', label: 'Projects' }
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
                            verticalAlign: "middle", textAlign: "center", fontSize: 20
                        }}
                    ></Tab>
                )
            })}
        </Tabs>
    )
}
