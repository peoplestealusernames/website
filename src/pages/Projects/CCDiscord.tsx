import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

export function CCDiscordPage() {
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
                    Discord bots running off Computer Craft
                </Typography>
                <Typography sx={{ p: .5 }}>
                    This project was one of my first attempts working with any from of webprotocal.
                    It was also my first time working with OAuth and Discord.
                    Unlike other solution I saw this does it all in ComputerCraft.
                </Typography>
                <Link href="https://github.com/peoplestealusernames/Computer-Craft-and-discord/" underline='hover'>
                    <Typography>
                        LinkedIn
                    </Typography>
                </Link>
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
                        The Basics
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        In all its a realativly short and pretty basic code.
                        All it does is monitor a discord chat and exec anything posted in chat.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        But the oringals looked very ugly and this was my terminal into minecraft.
                        So I spent too much of the time working on doing things like
                        having it make its own chat and
                        formating on the msg.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Behind The Scenes
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Truth be told however I found out Computer Craft had websockets
                        but not very good websocket support.
                        I had to make a custom heart beat system and find unique ways to send
                        messages to discords standards.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Login
                    </Typography>
                    <Typography sx={{ p: .5, fontSize: 20, textAlign: "center" }}>
                        Where I can do better
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        The login system is a hot mess.
                        It checks everything before attempting to loggin but,
                        Logging in all happens within the same while loop.
                        This is because I thought having a constantly updating auth in the main loop would be bad.
                        But because of the fragmented way discord handles auth it can lead to some data loss.
                        It also has zero error handling if it fails it crashes end and you have to manualy reboot.
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    </Grid >
    )
}
//TODO: add photo of discord bot