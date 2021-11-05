import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Fragment } from "react";

export function WorkPage() {
    return (
        <div className="WorkPage">
            <Grid container spacing={2}>
                <Box
                    sx={{
                        p: 5,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 5,
                    }}
                >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="/Photos//"
                                alt="Head"
                            />
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
        </div >
    )
}
