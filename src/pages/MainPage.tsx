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
            <Grid container spacing={2}
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
                                I'm currently a freshman at MTSU studying Mechatronics Engineering.
                                With multiple years of engineering and programming experience.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ p: 2 }}
            >
                <Card>
                    <CardContent>
                        <Typography>
                            This website is both an archive of my work and experiences and
                            a resume as my old one not properly show my expertise.
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
            </Grid>


            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

            </Grid>
        </div >
    )
}
