import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

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
                <Grid sx={{ p: .5 }}>
                    <Typography>
                        Computer Craft is a Minecraft mod that acts as an ingame LUA terminal.
                    </Typography>
                    <Typography>
                        This project took that and turned it into a discord bot.
                    </Typography>
                    <Typography>
                        This was made as a notification system for when I was not ingame. And was also planned to controll automated tasks.
                    </Typography>
                    <Link href="https://github.com/peoplestealusernames/Computer-Craft-and-discord/" underline='hover'>
                        <Typography>
                            GIT: Computer Craft and discord
                        </Typography>
                    </Link>
                </Grid>
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
                        The Front
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        When ran it goes into a predetermined discord and makes a new channel.
                        It then monitors that chat and runs anything posted in chat and post the results.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Computercraft also has IO with most things in game so it could be modified to control them remotely.
                        It could also read sensor data to notify me in the event of emergency.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Behind The Scenes
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Computer Craft had websockets, but not very good support for them.
                        I had to make a custom heart beat system and find unique ways to send
                        messages to discord's and OAUTH's standards.
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