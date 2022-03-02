import { Tab, Tabs, Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"

const items = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
]

export function Navigation() {
    return (
        <Card
            sx={{
                textAlign: "center", verticalAlign: "top"
            }}>
            <CardContent>
                <Tabs
                    centered sx={{
                        display: "flex",
                        justifyContent: "center", alignItems: "up",
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
            </CardContent>
        </Card>
    )
}
