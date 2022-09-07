import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {boardReducer} from "./boards/boardsReducer";
import {authReducer} from "./auth/authReducer";
import {notesReducer} from "./notes/notesReducer";
export const rootReducer = combineReducers({userReducer, boardReducer, authReducer, notesReducer})