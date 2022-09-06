import {UserActionTypes} from "./types";

export const UserActions = {
    setIsAuth: (isAuth) => ({type: UserActionTypes.SET_AUTH, isAuth}),
    login: (data) => ({type: UserActionTypes.LOGIN, data}),
    setUserData: (data) => ({type: UserActionTypes.SET_USER_DATA, data})
}