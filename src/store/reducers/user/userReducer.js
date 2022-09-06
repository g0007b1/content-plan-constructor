import {UserActionTypes} from "./types";

const initialState = {
    login: '',
    email: '',
    isLoading: false,
    user: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER_DATA: {
            return {...state, login: action.data.login, email: action.data.email}
        }
        default: return state
    }
}