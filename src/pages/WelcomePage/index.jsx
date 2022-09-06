import {NavLink} from "react-router-dom";

export const WelcomePage = () => {
    return (
        <>
            Привет! это страница где ты можешь <NavLink to={'/login'}>войти</NavLink> или <NavLink
            to={'/register'}>зарегистрироваться</NavLink>
        </>
    )
}