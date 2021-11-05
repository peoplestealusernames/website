import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import { Fragment } from "react";

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
                        <CardMedia
                            component="img"
                            src={"https://github.com/peoplestealusernames/website/blob/master/public/Photos/Head.jpg?raw=true"}
                            alt="Head"
                        />
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
                                I was born in Lake Geneva, WI
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{
                        p: 10,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 5,
                    }}
                >
                    <Card sx={{ maxWidth: 500 }}>

                        <Grid container spacing={2}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ImageList sx={{ p: 3, width: 250, height: 250 }} cols={1} rowHeight={70}>
                                {BegImage.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=200&h=80&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=200&h=80&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            <Typography>
                                My
                            </Typography>
                        </Grid>

                    </Card>
                </Box>
            </Grid>
        </div >
    )
}
