import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {boardReducer} from "./boards/boardsReducer";
import {authReducer} from "./auth/authReducer";
export const rootReducer = combineReducers({userReducer, boardReducer, authReducer})