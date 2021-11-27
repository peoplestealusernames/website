import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

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
                    Vex robotic arm
                </Typography>
                <Typography sx={{ p: .5 }}>
                    This was a high school project where we were offered mutliple problems to solve.
                    One of them was to make a working robotic arm and this is my atempt.
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
                    <Typography sx={{
                        p: 1, fontSize: 30,
                    }}>
                        Full setup
                    </Typography>
                    <CardMedia sx={{ maxHeight: 300 }}
                        component="img"
                        title="RobotArm"
                        src={Photos + "/Projects/RobotArm/RobotArmFull.jpg?raw=true"}
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
                        And from there we slowly assembled it using servos and the metal plates.
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Quickly finding out the servos were two weak to handle the weight.
                        Hence things like the counter weight.
                    </Typography>
                    <Typography sx={{ p: 1, fontSize: 20, textAlign: "center" }}>
                        The Controller
                    </Typography>
                    <Typography>
                        Seen in the back of the photo it is four potetiometers on a plate connected to the controller.
                        The reason for this deisgn is we were limited to a basic VEX kit, and it offered the most control.
                        Each potetiometer was linked to a servo and was scaled up accordingly in code.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ m: 1, p: 1, maxWidth: 400, textAlign: "left" }}>
                <CardContent>
                    <Typography sx={{ p: 1, fontSize: 30, textAlign: "center" }}>
                        The code
                    </Typography>
                    <Typography sx={{ m: 1 }}>
                        Although I lost the source code I do remember what it did and the sturgle to make it work.
                        It was a simple always on while true loop that kept setting servo position to potetiometer input.
                        Only one issue servos are 0-180 but potetiometers were -257-257 on testing.
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
                        All of this project became a problem solving issue.
                        This I can pretty confidently say is the limit of VEX.
                        But we made it work with creative problem solving and perseverence.
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    </Grid >
    )
}
//TODO: see if you can find src code