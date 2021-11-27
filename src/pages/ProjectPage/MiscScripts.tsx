import { Card, CardContent, Grid, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

export function MiscScriptsTSX() {
    return (
        <Grid container spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            margin="auto"
            sm={10}
            sx={{
                justifyContent: "center", alignItems: "up", textAlign: "center",
                p: 0
            }}
        >
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