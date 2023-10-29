import { Box, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Stack width='100%' direction='row' justifyContent='space-between'>
            <Link to="/">Home</Link>
            <Stack direction='row' gap={3}>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/nested-example/*">Nested example</Link>
                <Link to="/nested-example/nested-page">Nested page</Link>
            </Stack>
        </Stack>
    );
};

export default Navbar;