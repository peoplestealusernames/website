import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

//TODO: add alot of cad projects from ied and poe 
export function ProjectPage() {
    return (<Grid container spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sm={10}
        sx={{
            justifyContent: "center", alignItems: "up", textAlign: "center",
            p: 2
        }}
    >
        <Card sx={{ p: 1, m: 1, maxWidth: 250 }}>
            <CardContent>
                <Link component={RouterLink} to="/website/projects/RGB" underline='hover'>
                    <Typography>
                        RGB
                    </Typography>
                </Link>
                <Typography>
                    A mini story about learning electrical from scratch.
                    While connecting a RGB strip to the internet.
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ p: 1, m: 1, maxWidth: 220 }}>
            <CardContent>
                <Link component={RouterLink} to="/website/projects/db" underline='hover'>
                    <Typography>
                        Homebrew database
                    </Typography>
                </Link>
                <Typography>
                    A selfmade database system using TCP sockets
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ p: 1, m: 1, maxWidth: 220 }}>
            <CardContent>
                <Link component={RouterLink} to="/website/projects/psudo" underline='hover'>
                    <Typography>
                        Psudo project
                    </Typography>
                </Link>
                <Typography>
                    A group of APIs for future use as part of smarthome project
                </Typography>
            </CardContent>
        </Card>



        <Card sx={{ p: 1, m: 1, maxWidth: 220 }}>
            <CardContent>
                <Link component={RouterLink} to="/website/projects/CCDiscord" underline='hover'>
                    <Typography>
                        Discord bots in CC
                    </Typography>
                </Link>
                <Typography>
                    Running a discord bot in minecraft using Computer Craft.
                </Typography>
            </CardContent>
        </Card>
    </Grid >
    )
}
