import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default function TestTSX() {
    return (
        <Typography>AYE</Typography>
    );
}