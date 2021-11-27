import { Box, Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BegImage = [
    {
        img: 'https://github.com/peoplestealusernames/website/blob/master/public/Photos/Begin/scratch.png?raw=true',
        title: 'scratch',
    },
    {
        img: 'https://github.com/peoplestealusernames/website/blob/master/public/Photos/Begin/legoRobotic.png?raw=true',
        title: 'LEGORobotic',
    },
]

export function MainPage() {
    return (
        <div className="MainPage">
            <Grid container spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                margin="auto"
                sm={10}
                sx={{
                    p: 2,
                }}
            >
                <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        p: 3,
                        background: "red",
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 5,
                    }}
                >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardContent>
                            <CardMedia
                                component="img"
                                src={"https://github.com/peoplestealusernames/website/blob/master/public/Photos/Head.jpg?raw=true"}
                                alt="Head"
                            />
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography sx={{
                                p: 1, fontSize: 35,
                                justifyContent: "center", alignItems: "center", textAlign: "center"
                            }}>
                                About me
                            </Typography>
                            <Typography sx={{
                                p: .5, fontSize: 20,
                                justifyContent: "left", alignItems: "left", textAlign: "left"
                            }}>
                                Hello, I'm Brett Hogan!
                            </Typography>
                            <Typography sx={{
                                p: 1,
                                justifyContent: "left", alignItems: "left", textAlign: "left"
                            }}>
                                I'm a programming and engineering enthusiast,
                                currently enrolled at MTSU as a mechatonics major.
                                With 6 years of engineering, CAD, and programming knowledge.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

            <Grid container spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ p: 2 }}
            >
                <Grid container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    margin="auto"
                    sm={10}
                    sx={{
                        p: 2,
                    }}
                >
                    <Card sx={{ m: 1, maxWidth: 500 }}>
                        <CardContent>
                            <Typography sx={{
                                fontSize: 25,
                                justifyContent: "center", alignItems: "center", textAlign: "center"
                            }}>
                                In school
                            </Typography>
                            <Typography sx={{ p: 0.5, fontSize: 20 }}>
                                6 credits of engineering
                            </Typography>
                            <Typography>• Middle school intro class (Semester long)</Typography>
                            <Typography>• IED (Intro to engineering design)</Typography>
                            <Typography>• POE (Principles of engineering)</Typography>
                            <Typography>• Civil (Civil engineering class )</Typography>
                            <Typography>• EDD (Engineering deisgn and development: Senior capstone)</Typography>
                            <Typography>• AERO (Aerospace engineering)</Typography>
                            <Typography>• Engineering fundimentals (This year at MTSU)</Typography>
                            <Typography sx={{ p: 0.5, fontSize: 20 }}>
                                Other special classes
                            </Typography>
                            <Typography>• Lego robotics</Typography>
                            <Typography>• Honors Physics</Typography>
                            <Typography>• Honors Chemistry</Typography>
                            <Typography>• Honors Pre-Calc</Typography>
                            <Typography>-</Typography>
                            <Typography>
                                My favorite of these classes has to be AERO for how fun learning about space flight was.
                                A runner up would be POE with the many VEX robotics projects that I loved and thrived with.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ m: 1, maxWidth: 500 }}>
                        <CardContent>
                            <Typography sx={{
                                fontSize: 25,
                                justifyContent: "center", alignItems: "center", textAlign: "center"
                            }}>
                                Out of school
                            </Typography>
                            <Typography sx={{ p: 0.5, fontSize: 20 }}>
                                6 years of programming experience
                            </Typography>
                            <Typography>
                                I starting writing very simple lua scripts for a game named GMOD.
                                Now I'm writing apps in C# and using Nodejs/Typescript to run servers.
                                Such as the server your reading this off of, it was hand made using material UI.
                            </Typography>
                            <Typography sx={{ p: 0.5, fontSize: 20 }}>
                                2 years of IT and networking experience
                            </Typography>
                            <Typography>
                                I have been in IT and computer/network setup for 2 years.
                                I setup warrooms of computers and did their networking to have a protected network.
                                I also ran the IT and printer support for those warrooms.
                                I also recently started working with servers, nats, and p2p.
                            </Typography>
                            <Typography sx={{ p: 0.5, fontSize: 20 }}>
                                1 years of electrical
                            </Typography>
                            <Typography>
                                I've been working on mutiple project involving custom wiring and microcontrollers.
                            </Typography>
                            <Typography>
                            </Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>





            <Card sx={{ m: 4 }}>
                <CardContent>
                    <Typography>
                        This website is both an archive of my work and experiences and
                        a resume.
                    </Typography>
                    <Typography>
                        I belive in showing experties so I think demoing what I've done is better than saying I could.
                        So I linked my old resume below for a short version, but this site details examples of my experties.
                    </Typography>
                    <Link
                        href='https://github.com/peoplestealusernames/website/blob/master/public/Resume.pdf?raw=true'
                        underline='hover'>
                        <Typography>
                            Archive: Old resume
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </div >
    )
}
