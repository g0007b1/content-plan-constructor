import {UserActions} from "./user/actions";
import {BoardsActions} from "./boards/actions";
import {AuthActions} from "./auth/actions";
import {NotesActions} from "./notes/actions";

export const actions = {
    ...UserActions,
    ...BoardsActions,
    ...AuthActions,
    ...NotesActions
}