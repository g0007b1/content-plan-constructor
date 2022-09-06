import {BoardsActionTypes} from "./types";

const initialState = {
    id: '',
    events: [],
    columns: [],
    title: '',
    rows: [],
    currentDate: {
    },
    titleList: []
}

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case BoardsActionTypes.ADD_EVENT: {
            const event = {
                start: action.date,
                end: action.date,
                title: action.title
            }
            return {
                ...state,
                events: [...state.events, event]
            }
        }
        case BoardsActionTypes.ADD_COLUMN: {
            let rows1 = state.rows.map(row => [...row, '-'])
            console.log([...state.columns, action.column_title])
            return {
                ...state,
                columns: [...state.columns, action.column_title],
                rows: rows1
            }
        }
        case BoardsActionTypes.ADD_ROW: {
            let newRow = []
            for (let i = 0; i < state.columns.length; i++) {
                newRow.push('-')
            }
            return {
                ...state,
                rows: [...state.rows, newRow]
            }
        }
        case BoardsActionTypes.EDIT_CELL: {
            const newRows = [...state.rows]
            newRows[action.indexI][action.indexJ] = action.str
            //Оптимизировать жесско
            console.log(state.rows[0][1])
            let newEvents = state.rows.map(row => (
                {
                    start: row[1],
                    end: row[1],
                    title: row[0]
                }))
            return {
                ...state,
                rows: newRows,
                events: newEvents
            }
        }
        case BoardsActionTypes.EDIT_COLUMN: {
            let newColumns = [...state.columns]
            newColumns[action.indexJ] = action.value
            return {
                ...state,
                columns: newColumns
            }
        }
        case BoardsActionTypes.SET_CURRENT_DATE: {
            return {
                ...state,
                currentDate: {
                    start: action.start,
                    end: action.start
                }
            }
        }
        case BoardsActionTypes.SET_TITLES: {
            return {
                ...state,
                titleList: action.titles
            }
        }
        case BoardsActionTypes.SET_BOARD: {
            return {
                ...action.boardData,
                titleList: state.titleList
            }
        }
        default:
            return state
    }
}
