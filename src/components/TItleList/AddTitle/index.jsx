import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";

export const AddTitle = ({handleTitleSubmit}) => {
    const [titleError, setTitleError] = useState(false);
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        if (title === "") {
            setTitleError(true);
        } else {
            handleTitleSubmit(title)
        }

        console.log('lel')
    }
    return (
        <Box component='form' onSubmit={handleSubmit} sx={{mt: 1}}>
            <TextField
                onChange={(e) => setTitle(e.target.value)}
                label="Заголовок"
                variant="outlined"
                color="primary"
                fullWidth
                required
                margin="normal"
                error={titleError}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
            >
                Добавить
            </Button>
        </Box>
    )
}