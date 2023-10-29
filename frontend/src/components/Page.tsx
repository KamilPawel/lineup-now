import React from 'react';
import Navbar from './Navbar';
import { Stack } from '@mui/material';
import Footer from './Footer';

const Page: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <Stack>
            <Navbar />
            <Stack direction='row' justifyContent='center' alignItems='center' height='90vh'>
                {children}
            </Stack>
            <Footer />
        </Stack>
    );
};

export default Page;;