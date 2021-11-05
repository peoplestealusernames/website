import { Card, CardContent, CardMedia, Grid, Link, Tab, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom"

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

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
            <Typography sx={{
                p: 1, fontSize: 40,
                justifyContent: "center", alignItems: "center", textAlign: "center"
            }}>
                RGB, Ardunio, and simulation vs reality
            </Typography>
            <Typography sx={{ p: .5 }}>
                Trying to get the RGB lights to work with an Ardunio was my first time leaving a sim or software.
                I quickly learned just how little I learn a lot from it.
            </Typography>
        </Card>
        <Grid sx={{ p: 2 }} container spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="top"
            margin="auto"
            sm={10}
        >
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    General electrical
                </Typography>
                <Typography sx={{ m: 1 }}>
                    I was compelely clueless at electrical and thought that everything would work like software.
                    That was a very wrong assumption I got the wrong transistors, resistors, and had no pins.
                    I effectivly had expensive desk orniments that could not be used.
                    I also had to get a multimeter because I did not think i would need one.
                </Typography>
                <Typography sx={{ m: 1 }}>
                    I learned that hardware more than anything runs on Murphy's law.
                    I learned about Ohms law proper, wiring, and connection making.
                </Typography>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    Learning Arduino
                </Typography>
                <Typography sx={{ m: 1 }}>
                    Learning Arduino was something I passed off as the eaisest part.
                    Although Arduino coding is easy debug was not what I was expecting.
                    I think I tried just about every form of software debug until I bought a multimeter.
                    In hindsight the issues were very easy to spot but I thought I could tough it out like software.
                </Typography>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 250, textAlign: "left" }}>
                <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                    Soldering
                </Typography>
                <Typography sx={{ m: 1 }}>
                    I never even heard of this until a friend pointed it out to me.
                    I would like to say I'm decent at it now, however I will admit to causing plenty of mending and burning in the proccess.
                    I made a few rookie mistakes like pin connector to make a connection rather than just using the pin.
                    Very bad and weak solder on power supplies.
                    Connecting pins together on the Ardunio.
                    All of which have been fix but learning it was a fun challenge.
                </Typography>
            </Card>
        </Grid >
    </Grid >
    )
}

//TODO: Encryption project for all encrpytion attempts