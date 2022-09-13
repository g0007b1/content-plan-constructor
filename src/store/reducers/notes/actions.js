import {NotesActionTypes} from "./types";

export const NotesActions = {
    setNotes: (notes) => ({type: NotesActionTypes.SET_NOTES, notes}),
    addNote: (note) => ({type: NotesActionTypes.ADD_NOTE, note})
}