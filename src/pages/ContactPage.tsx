import { Box, Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

export function ContactPage() {
    return (<Grid container spacing={2}
        direction="column"
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
                    <Typography>
                        (931)-922-6045
                    </Typography>
                    <Typography>
                        bhogan@litigationlogisticsinc.com
                    </Typography>
                    <Link href="https://github.com/peoplestealusernames/" underline='hover'>
                        <Typography>
                            Github
                        </Typography>
                    </Link>
                    <Link href="https://www.linkedin.com/in/brett-hogan-b2052321b/" underline='hover'>
                        <Typography>
                            LinkedIn
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography>
                        Contact me!
                    </Typography>
                    <Typography>
                        Feel free to reachout at anytime with any questions, comments, or conserns.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Card sx={{ m: 1, maxWidth: 250, maxHeight: 250 }}>
            <CardContent>
                <CardMedia sx={{ maxWidth: 250, maxHeight: 250 }}
                    component="img"
                    title="PIC"
                    src={Photos + "/website.png?raw=true"}
                    alt="RGB+Screen+APP"
                />
            </CardContent>
        </Card>
    </Grid >
    )
}
