import { Card, CardContent, Grid, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function ShowCaseTSX() {
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
            <Card sx={{ p: 1, m: 1, maxWidth: 250 }}>
                <CardContent>
                    <Link component={RouterLink} to="/projects/VEXRobotArm" underline='hover'>
                        <Typography>
                            VEX Robotic Arm
                        </Typography>
                    </Link>
                    <Typography>
                        A high school VEX robotic project.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ p: 1, m: 1, maxWidth: 250 }}>
                <CardContent>
                    <Link component={RouterLink} to="/projects/RGB" underline='hover'>
                        <Typography>
                            RGB Arduino
                        </Typography>
                    </Link>
                    <Typography>
                        Connecting a Arduino to the internet as a RGB light controller.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ p: 1, m: 1, maxWidth: 220 }}>
                <CardContent>
                    <Link component={RouterLink} to="/projects/db" underline='hover'>
                        <Typography>
                            Homebrew database
                        </Typography>
                    </Link>
                    <Typography>
                        A selfmade database system.
                    </Typography>
                </CardContent>
            </Card>
            {/*
            <Card sx={{ p: 1, m: 1, maxWidth: 220 }}>
                <CardContent>
                    <Link component={RouterLink} to="/projects/psudo" underline='hover'>
                        <Typography>
                            Psudo project
                        </Typography>
                    </Link>
                    <Typography>
                        A group of APIs for future use as part of smarthome project
                    </Typography>
                </CardContent>
            </Card>
        */}
        </Grid >
    )
}
//TODO: add images