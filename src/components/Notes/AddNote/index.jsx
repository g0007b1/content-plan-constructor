import {useState} from "react";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import {Radio} from "@mui/icons-material";

export const AddNote = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const [category, setCategory] = useState("todos");

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
            //havent used a server bc i was developing this with react sandbox
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
                        gutterBottom
                    >
                        Create a new note
                    </Typography>

                    <Box component='form' onSubmit={handleSubmit} sx={{mt: 1}}>
                        <TextField
                            onChange={(e) => setTitle(e.target.value)}
                            label="Note Title"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            error={titleError}
                        />

                        <TextField
                            onChange={(e) => setDetails(e.target.value)}
                            label="Details"
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
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>

    )
}