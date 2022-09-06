import {authApi} from "../../../axios/auth-api";
import {UserActions} from "../user/actions";
import {AuthActionsTypes} from "./types";
import {BoardsActions} from "../boards/actions";

export const AuthActions = {
    // addEvent: (title, date) => ({type: BoardsActionTypes.ADD_EVENT, title, date}),
    setIsAuth: () => ({type: AuthActionsTypes.SET_AUTH}),
    login: (data) => {
        return async (dispatch) => {
            const userData = await authApi.login(data)
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
            dispatch(BoardsActions.getTitles(userData.user.login))
            dispatch(UserActions.setUserData(userData.user))
            dispatch(AuthActions.setIsAuth())
        }
    },
    registerAction: (data) => {
        return (dispatch) => {
            authApi.register(data).then(data => console.log(data))
        }
    }
}