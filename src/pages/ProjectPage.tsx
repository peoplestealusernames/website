import { Box, Card, CardContent, CardMedia, Grid, Link, Tab, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom"

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

export function ProjectPage() {
    return (<Grid container spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sm={10}
        sx={{
            justifyContent: "center", alignItems: "center", textAlign: "center",
            p: 2
        }}
    >
        <Card sx={{ p: 1, m: 1, maxWidth: 500 }}>
            <Typography>
                A
            </Typography>
            <Link href="website/projects/RGB" underline='hover'>
                <Typography>
                    Project: RGB
                </Typography>
            </Link>
        </Card>
        <Card sx={{ p: 1, m: 1, maxWidth: 500 }}>
            <CardContent>
                <Link href="website/projects/db" underline='hover'>
                    <Typography>
                        Homebrew database
                    </Typography>
                </Link>
            </CardContent>
        </Card>
        <Card sx={{ p: 1, m: 1, maxWidth: 500 }}>
            <CardContent>
                <Link href="website/projects/psudo" underline='hover'>
                    <Typography>
                        Psudo project
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    </Grid >
    )
}
