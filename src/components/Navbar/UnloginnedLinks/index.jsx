import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

export const UnloginnedLinks = () => {
    return (
        <>
            <Button component={NavLink} variant="text" color="inherit" to="/register" >Зарегистрироваться</Button>
            <Button component={NavLink} variant="text" color="inherit" to={'/login'}>Войти</Button>
            <Button component={NavLink} variant="text" color="inherit" to={'/'}>Назад</Button>
        </>
    )
}