import { Tab, Tabs } from "@mui/material"
import { Link } from "react-router-dom"

const items = [
    { path: '/website/', label: 'Home' },
    { path: '/website/skills', label: 'Skills' },
    { path: '/website/projects', label: 'Projects' },
    { path: '/website/contact', label: 'Contact' },
]

export function Navigation() {
    return (
        <Tabs
            scrollButtons="auto"
            centered sx={{
                p: 0.5,
                display: "flex",
                margin: "auto",
                textAlign: "center", verticalAlign: "top"
            }}>
            {items.map(item => {
                return (
                    <Tab component={Link} label={item.label} to={item.path}
                        sx={{
                            p: 0,
                            m: 0,
                            verticalAlign: "middle", textAlign: "center"
                        }}
                    ></Tab>
                )
            })}
        </Tabs>
    )
}
