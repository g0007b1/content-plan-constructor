import {NavLink} from "react-router-dom";
import {Button, Typography} from "@mui/material";

export const LoginnedLinks = () => {

    const signOut = () => {
        //ПЕРЕДЕЛАТЬ
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }
    return (
        <>
            <Button component={NavLink} variant="text" color="inherit" to="/home"><Typography>Домой</Typography></Button>
            <Button variant="text" color="inherit" onClick={signOut}><Typography>Выйти</Typography></Button>
        </>
    )
}