import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#004289',
        },
        secondary: {
            main: '#0F5096',
        },
        error: {
            main: '#EF4147'
        }
    },
    typography: {
        allVariants: {
            color: "#1C1C1C"
        },
        button: {
            textTransform: 'none'
        },

    }
});

export default theme;