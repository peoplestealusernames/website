import { Card, CardContent, CardMedia, Grid, Link, Tab, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom"

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

export function DBPage() {
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
            <Typography sx={{
                p: 1, fontSize: 40,
                justifyContent: "center", alignItems: "center", textAlign: "center"
            }}>
                Homebrew database
            </Typography>
            <Typography sx={{ p: .5 }}>
                The homebrew database is a project I've been working on to function as a form of custom smart home system.
                It's currently in a template stage as I lack the physical components to make this possible.
                The server software however is currently in a very workable and useable state.
            </Typography>
            <Typography sx={{ p: .5 }}>
                The current implimentation uses a NAT-Punching TCP socket-listner combo.
                Although this is far from production grade I had to work around not having port fowarding.
            </Typography>
            <Typography sx={{ p: .5 }}>
                Although previous versions used googles firebase
                observable in the orgional commits.
                I moved away from this for a more custom system as future proofing.
                It does however still using firebase as a signaling server (no static ip or port).
                I'm working on getting this to handle large amounts of sensor data which firebase would require payment for.
                It was also a latency issue where even with a simple RGB light a noticable lag was pressent.
            </Typography>
        </Card>
        <Grid sx={{ p: 2 }} container spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="top"
            margin="auto"
            sm={10}
        >
            <Card sx={{ m: 1, p: 1, maxWidth: 500 }}>
                <CardContent>
                    <Typography sx={{
                        p: 1, fontSize: 30,
                    }}>
                        Full setup
                    </Typography>
                    <CardMedia sx={{ maxHeight: 300 }}
                        component="img"
                        title="PIC"
                        src={Photos + "/Projects/DB/Whole.jpg?raw=true"}
                        alt="RGB+Screen+APP"
                    />
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    Database
                </Typography>
                <Typography sx={{ m: 1 }}>
                    The left terminal on the PC.
                    Current implimentation is fundamentally simple.
                    It works similar to http requests and websockets.
                    Functions are 'PUT' 'GET' 'LISTEN'.
                    Put and get being obvious Listen however my take on googles snapshot system.
                    For example A puts a listen on RGB.
                    It recives a put request with the current state and any changes after.
                </Typography>
                <Link href="https://github.com/peoplestealusernames/Database" underline='hover'>
                    GIT: Database
                </Link>
                <Link href="https://www.npmjs.com/package/tenk-database" underline='hover'>
                    NPM: tenk-database
                </Link>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    RGB Controller
                </Typography>
                <Typography sx={{ m: 1 }}>
                    The right terminal on the PC.
                    Using the server this listens to the RGB path.
                    It then signals to a arduino using a custom serializer to change the PWM on pins.
                    In turn switching transistors a certain % on or off.
                </Typography>
                <Link href="https://github.com/peoplestealusernames/TCPRGB" underline='hover'>
                    <Typography>
                        GIT: Node:RGB
                    </Typography>
                </Link>
                <Link href="https://github.com/peoplestealusernames/ArduinoRGB" underline='hover'>
                    <Typography>
                        GIT: Ardunio:RGB
                    </Typography>
                </Link>
                <Link href="/projects/RGB" underline='hover'>
                    <Typography>
                        Project: RGB
                    </Typography>
                </Link>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    Wall display
                </Typography>
                <Typography sx={{ m: 1 }}>
                    Screen on the wall to the right.
                    This is a custom display running off unity.
                    It is connected to the server via TCP and has a sleep function.
                    This was a proof of concept for future derivatives of the smart home project.
                    Currently it functions as a sun dial, clock, and calander.
                </Typography>
                <Link href="https://github.com/peoplestealusernames/Unity-Wall-Display" underline='hover'>
                    GIT: Wall-Display
                </Link>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    Phone app
                </Typography>
                <Typography sx={{ m: 1 }}>
                    Second computer on the lower shelf.
                    This is a custom phone app running in unity.
                    It is also connected to the server.
                    Currently it only functions as a toggle for puting the display into sleep mode and RGB control.
                    The RGB color wheel however does work and has drag functionality.
                </Typography>
                <Link href="https://github.com/peoplestealusernames/Connector-App" underline='hover'>
                    GIT: Phone app
                </Link>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    Custom Encryption
                </Typography>
                <Typography sx={{ m: 1 }}>
                    The database runs on its own encryption system to allow programs without encryption to connect.
                    The current implimentation uses utf-16 strings and converts them to numbers.
                    Nodejs had a error in the rough range of 55,000-60,000 out of 65,000 so only the first 50,000 characters are used.
                    In future I plan to reimpliment an old encryption system I wrote in lua off a spreadsheet test.
                </Typography>
                <Link href="https://github.com/peoplestealusernames/Database/blob/master/tenk-database/ts/crypto.ts" underline='hover'>
                    <Typography> GIT: Custom Encryption API</Typography>
                </Link>
                <Link href="https://github.com/peoplestealusernames/CC-Code/blob/master/API/EncryptionAPI.lua" underline='hover'>
                    <Typography> GIT: Old LUA code</Typography>
                </Link>
            </Card>
        </Grid >
    </Grid >
    )
}

//TODO: Encryption project for all encrpytion attempts