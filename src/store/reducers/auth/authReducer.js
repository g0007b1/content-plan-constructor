import {AuthActionsTypes} from "./types";

const initialState = {
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionsTypes.SET_AUTH: {
            return {...state, isAuth: true}
        }

        default: return state
    }
}