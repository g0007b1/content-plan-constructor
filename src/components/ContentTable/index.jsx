import {useSelector} from "react-redux";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import s from './index.module.css'
import {useState} from "react";
import moment from "moment";
import React from "react";

export const ContentTable = React.memo(() => {
    const columns = useSelector((state) => state.boardReducer.columns)
    const rows = useSelector((state) => state.boardReducer.rows)
    const currDate = useSelector((state) => state.boardReducer.currentDate)
    const events = useSelector((state) => state.boardReducer.events)
    const id = useSelector((state) => state.boardReducer.id)
    const {addColumn, editCell, addRow, setCurrDate, updateBoard, editColumn} = useActions()

    const [editable, setEditable] = useState([])
    const [inputState, setInputState] = useState('')
    const [editTableMode, setEditTabletMod] = useState(false)
    const [editableHeaderMode, setEditableHeaderMode] = useState(-1)

    const handleEditTableMod = () => {
        setEditTabletMod(!editTableMode)
    }

    const handleInputChange = (e) => {
        setInputState(e.target.value)
    }

    const handleEditMode = (i, j) => {
        console.log(i, j)
        setEditable([i, j])
    }

    const setHeaderEditMode = (index) => {
        setEditableHeaderMode(index)
    }

    const headerSubmit = (index) => {
        editColumn(index, inputState)
        setEditableHeaderMode(-1)
        setInputState('')
    }

    const addColumnHandler = () => {
        addColumn('-')
    }

    const handleRowSubmit = (i, j) => {
        setEditable([])
        if (j === 1) {
            setCurrDate(currDate)
            editCell(i, j, currDate.start)
            console.log(currDate)
        }
        if (inputState) {
            editCell(i, j, inputState)
        }
        setInputState('')
    }

    const onEnterPressed = (e, indexI, indexJ) => {
        if (e.key === 'Enter')
            handleRowSubmit(indexI, indexJ)
    }

    const saveBoard = () => {
        updateBoard(id, events, rows, columns)
    }

    const data = rows.map((row, indexI) => (
        <TableRow key={row.toString() + indexI} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            {row.map((d, indexJ) => (
                (indexI === editable[0] && indexJ === editable[1])
                    ? <TableCell key={d.toString() + indexI + indexJ} align={'center'}>
                        <input className={s.input}
                               autoFocus={true}
                               onBlur={() => handleRowSubmit(indexI, indexJ)}
                               placeholder={d.toString()}
                               value={inputState}
                               onChange={handleInputChange}
                               onKeyDown={(e) => onEnterPressed(e, indexI, indexJ)}/>
                    </TableCell>

                    : <TableCell align={'center'} onDoubleClick={() => handleEditMode(indexI, indexJ)}
                                 key={d.toString() + indexI + indexJ}>{(indexJ === 1 && d.toString() !== '-') ? moment(d).format('DD-MM-YYYY') : d.toString()}</TableCell>
            ))}
        </TableRow>
    ))
    const headers = columns.map((col, index) => {
        return <TableCell align={"center"} key={col + index}
                          onDoubleClick={() => setHeaderEditMode(index)}>{index === editableHeaderMode ?
            <input value={inputState} onChange={handleInputChange} className={s.input} autoFocus={true}
                   onBlur={() => headerSubmit(index)}/> : col}</TableCell>
    })

    return (
        <>
            <div className={s.table}>
                <button onClick={handleEditTableMod}>?</button>
                <div className={s.table_container}>
                    <TableContainer variant="outlined" elevation={0} component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {headers}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {editTableMode ? <button onClick={addColumnHandler} className={s.add_column_button}>+</button> : ''}
                </div>
                {editTableMode ? <button onClick={addRow}>+</button> : ''}
            </div>
            <button onClick={saveBoard}>SAVE</button>
        </>
    )
})