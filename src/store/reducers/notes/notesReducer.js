import {NotesActionTypes} from "./types";

const initialState = {
    notes: []
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NotesActionTypes.SET_NOTES: {
            return {
                notes: action.notes
            }
        }
        default: return state
    }
}