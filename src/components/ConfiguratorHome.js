import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ServiceDialog from './ServiceDialog';

const ConfiguratorHome = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex" sx={{ justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 60px)', flexDirection: 'column' }} >
            <Box component="img"
                sx={{ height: '60px', width: '60px', pb: 3 }}
                alt='tokic'
                src={window.location.origin + '/tools-and-utensils_2.svg'}>
            </Box>
            <Typography color='primary' sx={{ pb: 3, fontSize: '18px' }}>
                Pritisnite gumb niže kako biste pokrenuli
            </Typography>
            <Button size="large" variant="contained"
                sx={{ height: '35px', width: '210px', fontSize: '18px', p: '5px 15px', m: 0, borderRadius: '3px' }}
                onClick={() => {handleClickOpen(); setStep(1)}}>
                Pokreni konfigurator
            </Button>
            <ServiceDialog open={open} setOpen={setOpen} handleClose={handleClose} step={step} setStep={setStep} />
        </Box >

    );
}

export default ConfiguratorHome;