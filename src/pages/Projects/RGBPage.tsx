import { Card, CardContent, Grid, Link, Typography } from "@mui/material";

export function RGBPage() {
    return (<Grid container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sm={10}
        sx={{
            p: 2,
        }}>
        <Card sx={{ p: 2, maxWidth: 4000, textAlign: "left" }}>
            <CardContent>
                <Typography sx={{
                    p: 1, fontSize: 40,
                    justifyContent: "center", alignItems: "center", textAlign: "center"
                }}>
                    IOT Controlled RGB
                </Typography>
                <Typography sx={{ p: .5 }}>
                    Using the IOT to connect RGB lights to the internet through 3 diffrent methods.
                </Typography>
            </CardContent>
        </Card>
        <Grid container sx={{ p: 2 }} spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="top"
            margin="auto"
            sm={10}
        >
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        The Hardware
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        The Ardunio was a nano so the only non pin IO I had was serial.
                        So the code on the Arduino read serial to control the lights.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        The RGB lights are standard over the counter 12V RGBs.
                        The Ardunio cannot provide enough power however,
                        so its original power supply was modified to be used as a power supply.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        The power is regulated by 3 transistors controlled by the Arudino.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        The Arduino Code
                    </Typography>
                    <Grid sx={{ m: 1 }}>
                        <Typography>
                            Ardunio however has no native way of doing this so I made a packet system.
                        </Typography>
                        <Typography>
                            A packet is split by a '|' and an example would be "|r=255|".
                        </Typography>
                        <Typography>
                            After spliting it, the code reads the first char which should be r, g or b.
                        </Typography>
                        <Typography>
                            Then convert the rest into a number and define it as r, g or b.
                        </Typography>
                        <Typography>
                            Update the pins and done.
                        </Typography>
                    </Grid>
                    <Link href="https://github.com/peoplestealusernames/ArduinoRGB" underline='hover'>
                        <Typography>
                            GIT: Ardunio Code
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Computer Code V3
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Version 3 is currently a WIP but is going to use the same snapshot system from the current database system.
                        Only diffrence being the current system uses TCP sockets the new one will use WSS.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Computer Code V2
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Version 2 used the old TCP database system that is slowly being replaced by the WSS and HTTPS system.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        It used the snapshot and listen system from the database to listen for changes on RGB values.
                        This was done from things like a website and a phone app. {/*TODO:ADD */}
                    </Typography>
                    <Link href="https://github.com/peoplestealusernames/TCPRGB/tree/6aaa3bb210e886996156a366b99659f1bbff4f68" underline='hover'>
                        <Typography>
                            GIT: Node:RGB
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Computer Code V1
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Version 1 I lost the code for but it used Googles Firebase instead of my custom database to control it.
                        It used a similar snapshot system to listen for changes.
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    </Grid >
    )
}

//TODO: Encryption project for all encrpytion attempts