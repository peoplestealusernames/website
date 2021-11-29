import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

const Skills = [
    { name: "NodeJS" },
    { name: "TypeScript" },
    { name: "Lua" },
    { name: "C#" },
    { name: "Firebase" },
    { name: "OAuth2" },
    { name: "Encryption" },
    { name: "TCP" },
    { name: "SQF" },
    { name: "P2P" },
    { name: "Unity" },
    { name: "Cad" },
    { name: "Autodesk" },
    { name: "Inventor" },
    { name: "Arduino" },
    { name: "Compute shaders" },
    { name: "Soldering" },
    { name: "Networking" },
    { name: "IT" },
    { name: "Java" },
    { name: "Cryptography" },
    { name: "Team Management" },
    { name: "Problem solving" },
    { name: "Electrical" },
    { name: "Engineering" },
    { name: "Aerospace Engineering" },
    { name: "Cordinating" },
    { name: "Hard working" },
    { name: "React" },
    { name: "MUI" },
]

export function ExperiencePage() {
    return (<Grid container spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sm={10}
        sx={{
            p: 2,
        }}
    >
        {Skills.map(skill => {
            return (
                < Grid margin="auto"
                    sx={{
                        p: 0.5,
                    }
                    }>
                    <Card sx={{ p: 1, m: 1, maxWidth: 500 }}>
                        <Typography sx={{
                            p: 1, fontSize: 40,
                            justifyContent: "center", alignItems: "center", textAlign: "center"
                        }}>
                            {skill.name}
                        </Typography>
                    </Card>
                </Grid >
            )
        })}
    </Grid >
    )
}