import { Box, Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
                                src={"https://media.licdn.com/dms/image/C4D03AQH5HHtDp3nmTA/profile-displayphoto-shrink_200_200/0/1646249064205?e=1727913600&v=beta&t=8bx9PvZLi1QHl0ZhGBlThgacZcm4jZihqiRcGSMHJck"}
                                alt="Head"
                            />
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345, height: 353 }}>
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
                                enrolled at MTSU as a mechatonics major.
                            </Typography>
                            <Typography sx={{
                                p: 1,
                                justifyContent: "left", alignItems: "left", textAlign: "left"
                            }}>
                                I have 5 years of engineering knowledge and 6 of programming experience.
                                I also have 2 years of CAD experience.
                            </Typography>
                            <Typography sx={{
                                p: 1,
                                justifyContent: "left", alignItems: "left", textAlign: "left"
                            }}>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

            <Card sx={{ m: 4 }}>
                <CardContent>
                    <Typography>
                        This website is both an archive of my work and experiences and
                        a digital resume. But is also a work in progress.
                    </Typography>
                    <Typography>
                        I belive in showing experties so I think demoing what I've done is better than saying I could.
                        But I do still need a paper resume and that is linked below.
                    </Typography>
                    <Link
                        href='https://github.com/peoplestealusernames/website/blob/master/public/Resume.pdf'
                        underline='hover'>
                        <Typography>
                            Resume
                        </Typography>
                    </Link>
                </CardContent>
            </Card>

            <Card sx={{ m: 4 }}>
                <CardContent>
                    <Typography sx={{
                        fontSize: 25,
                        justifyContent: "center", alignItems: "center", textAlign: "center"
                    }}>
                        Knowledge and skills
                    </Typography>
                </CardContent>
            </Card>

            <Grid container spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="top"
                margin="auto"
                sm={10}
                sx={{
                    p: 0,
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
                            6.5 credits of engineering
                        </Typography>
                        <Typography>• Middle school intro class (Semester long)</Typography>
                        <Typography>• IED (Intro to engineering design)</Typography>
                        <Typography>• POE (Principles of engineering)</Typography>
                        <Typography>• Civil (Civil engineering class)</Typography>
                        <Typography>• EDD (Engineering deisgn and development: Senior capstone)</Typography>
                        <Typography>• AERO (Aerospace engineering)</Typography>
                        <Typography>• Engineering fundimentals (Enginnering intro class at MTSU)</Typography>
                        <Typography sx={{ p: 0.5, fontSize: 20 }}>
                            Other special classes
                        </Typography>
                        <Typography>• Lego robotics</Typography>
                        <Typography>• Honors Physics</Typography>
                        <Typography>• Honors Chemistry</Typography>
                        <Typography>• Honors Pre-Calc</Typography>
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
                            I starting writing very simple scripts for video games.
                            But slowly worked my way up to programming microcontrollers, writing C# apps and using Nodejs/Typescript to run servers.
                            Such as the server your reading this off of, it was hand made using material UI.
                        </Typography>
                        <Typography sx={{ p: 0.5, fontSize: 20 }}>
                            2 years of IT and networking experience
                        </Typography>
                        <Typography>
                            I have been in IT and computer/network setup for 2 years.
                            I also setup warrooms of computers and did their networking to have a protected network.
                            And have worked with NATs, P2P servies, and server networking.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div >
    )
}
