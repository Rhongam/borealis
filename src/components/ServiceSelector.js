import React from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';

const ServiceSelector = (props) => {
    const { services, handleChange, coupon, couponValue, setCoupon, setCouponValue, servicesSum } = props;

    const firstColumn = services.slice(0, 4);
    const secondColumn = services.slice(4, 8);

    return (
        <Box sx={{ display: 'flex', pt: 2 }}>
            <FormControl component="fieldset" variant="standard">
                <Grid container direction="row">
                    {firstColumn.map((data, i) => (
                        <Grid item sm={6} key={i}>
                            <FormGroup >
                                <FormControlLabel
                                    control={
                                        <Checkbox name={data.service} onChange={(event) => handleChange(event.target)} />
                                    }
                                    label={<Box sx={{ display: 'flex' }}><Typography  >{data.service}</Typography> <Typography color='primary' >{' (' + data.value + '€)'}</Typography></Box>}
                                />
                            </FormGroup>
                        </Grid>
                    ))}
                    {secondColumn.map((data, i) => (
                        <Grid item sm={6} key={i}>
                            <FormGroup >
                                <FormControlLabel
                                    control={
                                        <Checkbox name={data.service} onChange={(event) => handleChange(event.target)} />
                                    }
                                    label={<Box sx={{ display: 'flex' }}><Typography >{data.service}</Typography> <Typography color='primary' >{' (' + data.value + '€)'}</Typography></Box>}
                                />
                            </FormGroup>
                        </Grid>
                    ))}
                    <Box sx={{ display: 'flex', alignItems: 'center', pt: 4 }}>
                        <Button onClick={() => setCoupon(!coupon)}>imam kupon</Button>
                        <Typography sx={{ fontSize: '18px', pl: 35 }} >UKUPNO: </Typography>
                        <Typography color='primary' sx={{ fontSize: '24px' }} >{servicesSum ? servicesSum : '0'} € </Typography>
                    </Box>
                </Grid>
                <Box sx={{ display: 'flex' }}>
                    {coupon ? (
                        (couponValue === 'Tokić123' || couponValue === '') ?
                            <TextField size='small' variant="outlined" value={couponValue} onChange={(event) => setCouponValue(event.target.value)} sx={{ width: '150px', pl: '4px' }} />
                            : <TextField size='small' error helperText="Kupon nije valjan." variant="outlined" value={couponValue} onChange={(event) => setCouponValue(event.target.value)} sx={{ width: '150px', pl: '4px' }} />)
                        : null}
                    {couponValue === 'Tokić123' ? <Box component="img" sx={{ height: '40px', width: '40px' }} alt='tokic' src={window.location.origin + '/state_check.svg'}>
                    </Box> : null}

                </Box>
            </FormControl>
        </Box >
    )
}

export default ServiceSelector;