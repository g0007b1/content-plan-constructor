import {Box, Button, Container, IconButton, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {NoteCard} from "./NoteCard";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useState} from "react";
import {AddNote} from "./AddNote";


export const Notes = () => {
    const notes = useSelector((state) => state.notesReducer.notes)
    const [addMod,setAddMod] = useState(false)
    const noteLinst = notes.map(n => {
        return (
            <div key={n.id}>
                <NoteCard n={n}/>
            </div>
        );
    })
    const addNoteHandler = () => {
        setAddMod(!addMod)

    }
    console.log(addMod)
    return (
        <Box sx={{
            height: 800,
            width: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography component="h1" variant="h5">Заметки</Typography>
            {noteLinst}
            <IconButton aria-label="fingerprint" color="primary" onClick={addNoteHandler}>
                <AddCircleOutlineIcon />
            </IconButton>
            {addMod ? <AddNote/> : <></>}
        </Box>
    )
}