import {BoardsActionTypes} from "./types";
import {boardApi} from "../../../axios/board-api";

export const BoardsActions = {
    addEvent: (title, date) => ({type: BoardsActionTypes.ADD_EVENT, title, date}),
    addColumn: (column_title) => ({type: BoardsActionTypes.ADD_COLUMN, column_title}),
    addRow: () => ({type: BoardsActionTypes.ADD_ROW}),
    editCell: (indexI, indexJ, str) => ({type: BoardsActionTypes.EDIT_CELL, indexI, indexJ, str}),
    editColumn: (indexJ, value) => ({type: BoardsActionTypes.EDIT_COLUMN, indexJ, value}),
    setCurrDate: (start) => ({type: BoardsActionTypes.SET_CURRENT_DATE, start}),
    setTitles: (titles) => ({type: BoardsActionTypes.SET_TITLES, titles}),
    setBoard: (boardData) => ({type: BoardsActionTypes.SET_BOARD, boardData}),
    getTitles: (userName) => {
        return async (dispatch) => {
            const response = await boardApi.getTitles(userName)
            console.log(response)
            dispatch(BoardsActions.setTitles(response))
        }
    },
    getBoard: (id) => {
        return async (dispatch) => {
            const response = await boardApi.getBoard(id)
            console.log(response)
            dispatch(BoardsActions.setBoard(response))
        }
    },
    updateBoard: (id, events, rows, columns) => {
        return async (dispatch) => {
            const response = await boardApi.updateBoard(id, events, rows, columns)
            console.log(response)
        }
    },
    addBoard: (length, owner) => {
        return async (dispatch) => {
            const response = await boardApi.addBoard(length, owner)
            console.log(response)
        }
    }
}