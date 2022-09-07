import {TitleList} from "../../components/TItleList";
import {Notes} from "../../components/Notes";
import {Box} from "@mui/material";

export const HomePage = () => {
    return (
        <Box sx={{
            display:'flex'
        }}>
            <TitleList/>
            <Notes/>
        </Box>
    )
}