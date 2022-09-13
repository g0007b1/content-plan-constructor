import {useState} from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography
} from "@mui/material";

export const AddNote = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitleError(false);
        setDetailsError(false);

        if (title === "") {
            setTitleError(true);
        }

        if (details === "") {
            setDetailsError(true);
        }
        if (title && details) {
            // havent used a server bc i was developing this with react sandbox
            // отправить

        }
    };

    return (
        <>
            <Container component="div" maxWidth="xs">
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h2"
                    >
                        Создать заметку
                    </Typography>

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

                        <TextField
                            onChange={(e) => setDetails(e.target.value)}
                            label="Текст"
                            margin="normal"
                            multiline
                            rows={4}
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            error={detailsError}
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
                </Box>
            </Container>
        </>

    )
}