import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import MakePicker from './MakePicker';
import ServiceSelector from './ServiceSelector';
import PersonalDataForm from './PersonalDataForm';
import ConfiguratorOverview from './ConfiguratorOverview';
import ConfigurationSent from './ConfigurationSent';

const ServiceDialog = (props) => {
    const { open, handleClose, step, setStep } = props;

    const makes = ['Peugeot', 'BMW', 'Hyundai', 'Volkswagen', 'Seat', 'Honda', 'Citroen', 'Alfa Romeo', 'Toyota', 'Audi', 'Kia', 'Mercedes'];
    const [selectedMake, setSelectedMake] = useState('');

    const services = [
        {
            service: 'Zamjena ulja i filtera',
            value: 65
        },
        {
            service: 'Servis klima uređaja',
            value: 40
        },
        {
            service: 'Promjena pakni',
            value: 60
        },
        {
            service: 'Balansiranje guma',
            value: 7
        },
        {
            service: 'Promjena guma',
            value: 15
        },
        {
            service: 'Zamjena ulja na kočnicama',
            value: 30
        }
    ];
    const [selectedServices, setSelectedServices] = useState([]);
    let servicesSum = 0;

    if (selectedServices.length > 0) {
        servicesSum = selectedServices.map(el => el.value).reduce((a, c) => { return a + c });
    }

    const [coupon, setCoupon] = useState(false);
    const [couponValue, setCouponValue] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [remark, setRemark] = useState('');

    const handleChange = (target) => {
        if (target.checked) {
            setSelectedServices([...selectedServices, services.find(el => el.service === target.name)])
        }
        else if (target.checked === false) {
            setSelectedServices(selectedServices.filter(el => el.service !== target.name))
        }
    }

    return (
        (step > 0 && step < 6) ? <Dialog open={open} onClose={handleClose}  >
            <DialogTitle sx={{ fontSize: '24px' }}>
                Konfigurator Servisa
                <Button sx={{ position: 'absolute', right: 8, top: 16 }}
                    onClick={() => { setStep(0); handleClose(); setSelectedMake(''); setSelectedServices([]); setName(''); setEmail(''); setPhone(''); setRemark('') }}>
                    <img src={window.location.origin + "/ecs-icon.svg"} alt='close-icon' />
                </Button>
            </DialogTitle>
            <DialogContent sx={{ minWidth: '500px', pr: 0 }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography color='primary' >
                        {step === 1 ? 'Korak 1.' :
                            (step === 2 ? 'Korak 2.' :
                                (step === 3 ? 'Korak 3.' :
                                    (step === 4 ? 'Korak 4.' :
                                        null
                                    )))}
                    </Typography>
                    <Typography sx={{ pl: 1, color: '#1C1C1C' }}>
                        {step === 1 ? 'Odaberite proizvođača vašeg vozila' :
                            (step === 2 ? 'Odaberite jednu ili više usluga koju trebate.' :
                                (step === 3 ? 'Vaši podaci' :
                                    (step === 4 ? 'Pregled i potvrda vašeg odabira' :
                                        null
                                    )))}
                    </Typography>
                </Box>
                {
                    step === 1 ?
                        <MakePicker makes={makes} setSelectedMake={setSelectedMake} />
                        : (step === 2 ?
                            <ServiceSelector services={services} selectedServices={selectedServices} setSelectedServices={setSelectedServices} handleChange={handleChange} coupon={coupon} setCoupon={setCoupon} couponValue={couponValue} setCouponValue={setCouponValue} servicesSum={servicesSum} />
                            : (step === 3 ?
                                <PersonalDataForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} remark={remark} setRemark={setRemark} />
                                : (step === 4 ?
                                    <ConfiguratorOverview selectedMake={selectedMake} setStep={setStep} setSelectedMake={setSelectedMake} selectedServices={selectedServices} setSelectedServices={setSelectedServices} coupon={coupon} couponValue={couponValue} servicesSum={servicesSum} name={name} email={email} phone={phone} remark={remark} />
                                    : (step === 5 ?
                                        <ConfigurationSent setStep={setStep} handleClose={handleClose} setSelectedMake={setSelectedMake} setSelectedServices={setSelectedServices} setName={setName} setEmail={setEmail} setPhone={setPhone} setRemark={setRemark} />
                                        : null)
                                )
                            )
                        )
                }
            </DialogContent>
            <DialogActions sx={{ mr: 2, pb: 0 }}>
                {
                    step === 1 ?
                        <Button variant="outlined" onClick={() => { setStep(0); handleClose(); setSelectedMake(''); setSelectedServices([]) }}
                            sx={{ height: '35px', width: '101px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }}>
                            Odustani
                        </Button>
                        : (step === 2 ? < Button variant="outlined" onClick={() => { setStep(step - 1); setSelectedServices([]); setSelectedMake('') }}
                            sx={{ height: '35px', width: '101px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }}>
                            Nazad</Button>
                            : (step === 3 ? < Button variant="outlined" onClick={() => { setStep(step - 1); setSelectedServices([]); }}
                                sx={{ height: '35px', width: '101px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }}>
                                Nazad</Button>
                                : (step === 4 ? < Button variant="outlined" onClick={() => setStep(step - 1)}
                                    sx={{ height: '35px', width: '101px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }}>
                                    Nazad</Button>
                                    : null)
                            )
                        )
                }
                {
                    (selectedMake !== '' && step === 1) ?
                        <Button variant="contained" onClick={() => setStep(step + 1)}
                            sx={{ height: '35px', width: '70px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }} >
                            Dalje
                        </Button>
                        : ((selectedMake !== '' && step === 2 && selectedServices.length > 0) ?
                            <Button variant="contained" onClick={() => setStep(step + 1)}
                                sx={{ height: '35px', width: '70px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }} >
                                Dalje
                            </Button>
                            : ((selectedMake !== '' && step === 3 && selectedServices.length > 0 && name.length > 0 && email.length > 0 && phone.length > 0) ?
                                <Button variant="contained" onClick={() => setStep(step + 1)}
                                    sx={{ height: '35px', width: '70px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }} >
                                    Dalje
                                </Button>
                                : ((selectedMake !== '' && step === 4 && selectedServices.length > 0 && name.length > 0 && email.length > 0 && phone.length > 0) ?
                                    <Button variant="contained" onClick={() => setStep(step + 1)}
                                        sx={{ height: '35px', width: '70px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }} >
                                        Dalje
                                    </Button>
                                    : (step === 5) ? null
                                        : <Button variant="contained" disabled
                                            sx={{ height: '35px', width: '70px', fontSize: '18px', p: '5px 15px', m: '0 0 16px 0', borderRadius: '3px' }} >
                                            Dalje
                                        </Button>
                                )
                            )
                        )
                }
            </DialogActions>
        </Dialog >
            : null
    )
}

export default ServiceDialog;