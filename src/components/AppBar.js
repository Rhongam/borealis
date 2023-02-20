import React from 'react'; 
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const BasicAppBar = () => {
    return (
        <Box >
            <AppBar sx={{ height: '60px', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '15px 50px', gap: '50px' }}>
                <Toolbar>
                    <Box component="img"
                        sx={{ height: '30px', width: '150px' }}
                        alt='tokic'
                        src={window.location.origin + '/tokic_logo_1.svg'}>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', pl: 5, gap: '50px' }}>
                        <Typography sx={{ flex: 'none', order: 0, flexGrow: 0, fontSize: '18px', color: 'white' }}>
                            KONFIGURATOR SERVISA
                        </Typography>
                        <Typography sx={{ flex: 'none', order: 1, flexGrow: 0, pl: 145, color: 'white' }}>
                            Izračunajte trošak servisa
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default BasicAppBar;