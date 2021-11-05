import { Box, Card, CardContent, Grid, Link, Typography } from "@mui/material";

export function ExperiencePage() {
    return (<Grid container spacing={2}
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
                    <Typography>
                        (931)-922-6045
                    </Typography>
                    <Typography>
                        bhogan@litigationlogisticsinc.com
                    </Typography>
                    <Link href="https://github.com/peoplestealusernames/" underline='hover'>
                        GitHub
                    </Link>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography>
                        Contact me!
                    </Typography>
                    <Typography>
                        Feel free to reachout at anytime with any questions, comments, or concerns.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Grid >
    )
}
