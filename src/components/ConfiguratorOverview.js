import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const ConfiguratorOverview = (props) => {
    const { selectedMake, setStep, setSelectedMake, selectedServices, setSelectedServices, coupon, couponValue, servicesSum, name, email, phone, remark } = props;

    return (
        <Box sx={{ pt: 2, pr: 4 }}>
            <Typography sx={{ color: '#585757' }}>
                Molimo vas da još jednom pregledate i potvrdite podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili ispravnost svojih podataka, za slanje upita na servis pritisnite gumb “Pošalji” koji se nalazi na dnu.
            </Typography>
            <Box sx={{ pt: 2, pr: 4, pl: 2 }}>
                <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                    <Typography color='primary'>
                        Model vozila
                    </Typography>
                    <Button sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setStep(1); setSelectedMake(''); setSelectedServices([]) }}>
                        <Typography >
                            Uredi
                        </Typography>
                        <Box component="img"
                            sx={{ height: '24px', width: '24px', pl: 1 }}
                            alt='uredi'
                            src={window.location.origin + '/edit-icon.svg'}>
                        </Box>
                    </Button>
                </Box>
                <Typography >
                    {selectedMake}
                </Typography>
                <div className="line" />
                <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                    <Typography color='primary'>
                        Odabrane usluge
                    </Typography>
                    <Button sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setStep(2); setSelectedServices([]) }}>
                        <Typography >
                            Uredi
                        </Typography>
                        <Box component="img"
                            sx={{ height: '24px', width: '24px', pl: 1 }}
                            alt='uredi'
                            src={window.location.origin + '/edit-icon.svg'}>
                        </Box>
                    </Button>
                </Box>
                {selectedServices.map((data) => (
                    <Box key={data.service} display='flex' sx={{ justifyContent: 'space-between' }}>
                        <Typography>
                            {data.service}
                        </Typography>
                        <Typography>
                            {data.value.toFixed(2)} €
                        </Typography>
                    </Box>
                ))}
                {(coupon && couponValue === 'Tokić123')  ?
                    <Box display='flex' sx={{ justifyContent: 'right' }}>
                        <Typography sx={{ mr: 4 }}>
                            Popust 30%:
                        </Typography>
                        <Typography>
                            {(0.3 * servicesSum).toFixed(2)} €
                        </Typography>
                    </Box>
                    : null
                }
                <Box display='flex' sx={{ justifyContent: 'right' }}>
                    <Typography sx={{ mr: 4 }}>
                        Ukupno:
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: '700' }}>
                        {(coupon && couponValue === 'Tokić123') ? (servicesSum - 0.3 * servicesSum).toFixed(2) : servicesSum.toFixed(2)} €
                    </Typography>
                </Box>

                <div className="line" />
                <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                    <Typography color='primary'>
                        Kontakt podaci
                    </Typography>
                    <Button sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => setStep(3)}>
                        <Typography >
                            Uredi
                        </Typography>
                        <Box component="img"
                            sx={{ height: '24px', width: '24px', pl: 1 }}
                            alt='uredi'
                            src={window.location.origin + '/edit-icon.svg'}>
                        </Box>
                    </Button>
                </Box>
                <Box display='flex'>
                    <Typography sx={{ color: '#585757' }}>
                        Ime i prezime:
                    </Typography >
                    <Typography sx={{ pl: 2 }}>
                        {name}
                    </Typography>
                </Box>
                <Box display='flex'>
                    <Typography sx={{ color: '#585757' }}>
                        Email adresa:
                    </Typography >
                    <Typography sx={{ pl: 2 }}>
                        {email}
                    </Typography>
                </Box>
                <Box display='flex'>
                    <Typography sx={{ color: '#585757' }}>
                        Broj telefona:
                    </Typography >
                    <Typography sx={{ pl: 2.5 }}>
                        {phone}
                    </Typography>
                </Box>
                <Box display='flex'>
                    <Typography sx={{ color: '#585757' }}>
                        Napomena:
                    </Typography >
                    <Typography sx={{ pl: 4 }}>
                        {remark}
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default ConfiguratorOverview;