import {LoginForm} from "../../components/LoginForm";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const LoginPage = (props) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    if (isAuth) {
        return <Navigate to={'/home'}/>
    }

    return (
        <>
            <LoginForm/>
        </>
    )
}