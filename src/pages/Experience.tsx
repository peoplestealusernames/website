import { Box, Card, CardContent, CardMedia, Grid, Link, Tab, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom"

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

export function ExperiencePage() {
    return (<Grid container spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sm={10}
        sx={{
            p: 2,
        }}
    >
        <Card sx={{ p: 1, m: 1, maxWidth: 500 }}>
            <Typography sx={{
                p: 1, fontSize: 40,
                justifyContent: "center", alignItems: "center", textAlign: "center"
            }}>
                NodeJS & Typescript
            </Typography>
            <Typography>
                This website
            </Typography>
            <Link href="/projects/RGB" underline='hover'>
                <Typography>
                    Project: RGB
                </Typography>
            </Link>
            <Link href="/projects/db" underline='hover'>
                <Typography>
                    Homebrew database
                </Typography>
            </Link>
            <Link href="/projects/psudo" underline='hover'>
                <Typography>
                    Psudo project
                </Typography>
            </Link>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
            <CardContent>
                <CardMedia
                    component="img"
                    title="PIC"
                    src={Photos + "/Projects/Arm.jpg?raw=true"}
                    alt="Head"
                />
                <Typography>
                    (931)-922-6045
                </Typography>
            </CardContent>
        </Card>
    </Grid >
    )
}
