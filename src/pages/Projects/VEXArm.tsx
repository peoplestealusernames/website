import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

export function VEXArmPage() {
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
                    Vex Robotic Arm
                </Typography>
                <Typography sx={{ p: .5 }}>
                    As part of the PLTW curriculum me and my group partner were tasked with building a working robotic arm with a claw.
                </Typography>
            </CardContent>
        </Card>
        <Grid container sx={{ p: 2 }} spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="top"
            margin="auto"
            sm={10}
        >
            <Card sx={{ m: 1, p: 1, maxWidth: 500 }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        Finial Product
                    </Typography>
                    <CardMedia sx={{ maxHeight: 300, imageOrientation: 'from-image' }}
                        component="img"
                        title="RobotArm"
                        src={process.env.PUBLIC_URL + "/Photos/Projects/RobotArm/RobotArmFull.jpg"}
                        alt="Full Robotic Arm"
                    />
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        The Design
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Me and my group partner thought a two joint robotic arm on a swivel would be the best deisgn.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        We quickly found out the servos were two weak to handle the weight.
                        So to compensate we added counter weights.
                        This was a major flaw with the final design.
                    </Typography>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        The Remote
                    </Typography>
                    <Typography>
                        Seen in the back of the photo it is four potetiometers on a plate connected to the controller.
                        The reason for this deisgn is we were limited to a basic VEX kit, and it offered the most overall control when compaired to other options.
                        Each potetiometer was linked to a servo and it output was proportinal to the servos motion.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        The Code
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Although I lost the source code I do remember what it did.
                        It was a while true loop that kept setting servo position to potetiometer input.
                        Only one issue servos are 0-180 but potetiometers were -257-257 upon testing.
                        So simple clamp and scaleing methods had to be used to adjust it correctly.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        What I learned
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        The deisgn of this robotic arm failed almost on start,
                        as right after attaching the first joint the swivil gave out.
                        At that point we should have know it was a bad design and redesigned but persevered,
                        this however lead to the design not working as the claw was to heavy for the arm.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        I learned that some designs although acheviable are not practical.
                        I learned that redesigning in the beginning is better than failing at the end.
                        And I learned that fully designing a soluton before building it will help you stop ftal flaws.
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    </Grid >
    )
}
//TODO: see if you can find src code