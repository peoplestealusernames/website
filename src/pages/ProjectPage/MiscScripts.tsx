import { Card, CardContent, Grid, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
                    <Link component={RouterLink} to="/projects/CCDiscord" underline='hover'>
                        <Typography>
                            Discord bots in CC
                        </Typography>
                    </Link>
                    <Typography>
                        Running a discord bot in Minecraft using Computer Craft.
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    )
}