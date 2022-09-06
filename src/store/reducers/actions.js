import {UserActions} from "./user/actions";
import {BoardsActions} from "./boards/actions";
import {AuthActions} from "./auth/actions";

export const actions = {
    ...UserActions,
    ...BoardsActions,
    ...AuthActions
}