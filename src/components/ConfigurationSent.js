import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const ConfigurationSent = (props) => {
    const { setStep, handleClose, setSelectedMake, setSelectedServices, setName, setEmail, setPhone, setRemark} = props;

    return (
        <Box display='flex' sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
            <Box component="img"
                sx={{ height: '60px', width: '60px', flex: '0 0 100%', pt: 1 }}
                alt='tokic'
                src={window.location.origin + '/success-icon.svg'}>
            </Box>
            <Typography color='primary' sx={{ textAlign: 'center', flex: '0 0 100%', pt: 2, fontSize: '24px' }}>
                Vaša prijava uspješno je poslana
            </Typography>
            <Typography sx={{ textAlign: 'center', flex: '0 0 100%', pt: 2 }}>
                Vaša prijava uspješno je poslana i zapromljena. Kontaktirat ćemo vas u najkraćem mogućem roku.
            </Typography>
            <Typography sx={{ textAlign: 'center', flex: '0 0 100%' }}>
                Hvala vam!
            </Typography>
            <Button variant="contained" onClick={() => {setStep(0); handleClose(); setSelectedMake(''); setSelectedServices([]); setName(''); setEmail(''); setPhone(''); setRemark('')}}
                sx={{ height: '35px', width: '84px', fontSize: '18px', borderRadius: '3px', mt: 2}} >
                Zatvori
            </Button>
        </Box >
    )
}

export default ConfigurationSent;