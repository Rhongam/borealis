import React from 'react';
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';

const MakePicker = (props) => {
    const { makes, setSelectedMake } = props;

    const firstColumn = makes.slice(0, 4);
    const secondColumn = makes.slice(4, 8);
    const thirdColumn = makes.slice(8, 12);

    return (
        <FormControl sx={{ p: 1, mt: 2 }}>
            <RadioGroup
                aria-labelledby="pick-make"
                defaultValue={makes}
                name="pick-make"
                onChange={(event) => setSelectedMake(event.target.value)}
            >
                <Grid container direction="row" >
                    {firstColumn.map((label, i) => (
                        <Grid item sm={4} key={i}>
                            <FormControlLabel key={i} value={label} control={< Radio />} label={label} />
                        </Grid>
                    ))}
                    {secondColumn.map((label, i) => (
                        <Grid item sm={4} key={i}>
                            <FormControlLabel key={i} value={label} control={< Radio />} label={label} />
                        </Grid>
                    ))}
                    {thirdColumn.map((label, i) => (
                        <Grid item sm={4} key={i}>
                            <FormControlLabel key={i} value={label} control={< Radio />} label={label} />
                        </Grid>
                    ))}
                </Grid>
            </RadioGroup>
        </FormControl>
    );
}

export default MakePicker;