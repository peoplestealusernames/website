import { Card, CardContent, Grid, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { MiscScriptsTSX } from "./MiscScripts";
import { ShowCaseTSX } from "./ShowCase";

const Photos = "https://github.com/peoplestealusernames/website/blob/master/public/Photos"

//TODO: add alot of cad projects from ied and poe 
export function ProjectPage() {
    return (
        <div>
            <Box
                sx={{
                    p: 1
                }}
            ></Box>
            <Box
                sx={{
                    textAlign: "center",
                    p: 3
                }}
            >
                <Card
                    sx={{
                        textAlign: "center",
                        p: .5
                    }}
                >
                    <CardContent>
                        <Typography sx={{
                            fontSize: 40,
                            justifyContent: "center", alignItems: "center", textAlign: "center"
                        }}>
                            Showcase projects
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <ShowCaseTSX />
            <Box
                sx={{
                    p: 1
                }}
            ></Box>
            <Box
                sx={{
                    textAlign: "center",
                    p: 3
                }}
            >
                <Card
                    sx={{
                        textAlign: "center",
                        p: .5
                    }}
                >
                    <CardContent>
                        <Typography sx={{
                            fontSize: 40,
                            justifyContent: "center", alignItems: "center", textAlign: "center"
                        }}>
                            Miscellaneous scripts
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <MiscScriptsTSX />
        </div >
    )
}
