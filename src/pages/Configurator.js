import React, { useEffect } from 'react';
import ConfiguratorHome from '../components/ConfiguratorHome';
import { Box } from '@mui/material';

const Configurator = () => {
    useEffect(() => {
        document.title = 'Konfigurator servisa';
    });

    return (
        <Box sx={{ height: 'calc(100vh - 60px)', pt: '60px' }}>
            <ConfiguratorHome />
        </Box>
    );
};
export default Configurator;