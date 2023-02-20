import React from 'react';
import { Box, TextField } from '@mui/material';

const PersonalDataForm = (props) => {
    const { name, setName, email, setEmail, phone, setPhone, remark, setRemark } = props;

    return (
        <Box sx={{ pt: 2, pr: 5, pl: 1 }}>
            <TextField fullWidth helperText={name.length > 0 ? '' : 'Dodajte ime i prezime'} label="Ime i prezime" variant="outlined"
                error={name.length > 0 ? false : true}
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
                sx={{ pb: 3 }} InputProps={{ style: { fontWeight: 600 } }}
            />
            <TextField fullWidth helperText={email.length > 0 ? '' : 'Dodajte Email adresu'} label="Email adresa" variant="outlined"
                error={email.length > 0 ? false : true}
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                sx={{ pb: 3 }} InputProps={{ style: { fontWeight: 600 } }}
            />
            <TextField fullWidth helperText={phone.length > 0 ? '' : 'Dodajte broj telefona'} label="Broj telefona" variant="outlined"
                error={phone.length > 0 ? false : true}
                value={phone}
                onChange={(event) => {
                    setPhone(event.target.value);
                }}
                sx={{ pb: 3 }} InputProps={{ style: { fontWeight: 600 } }}
            />
            <TextField fullWidth rows={3} multiline={true} label="Napomena(opcionalno)" variant="outlined"
                value={remark}
                onChange={(event) => {
                    setRemark(event.target.value);
                }}
                sx={{ pb: 3 }} InputProps={{ style: { fontWeight: 600 } }}
            />
        </Box>
    )
}

export default PersonalDataForm;