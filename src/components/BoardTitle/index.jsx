import {EditOutlined} from "@mui/icons-material";
import {Box, Button, IconButton, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

export const BoardTitle = ({title, link}) => {
    return (
        <Box sx={{

        }}>
            <Button size="large" variant="text" component={NavLink} to={`/board/${link}`}><Typography color="textSecondary" variant='h6'>{title}</Typography></Button>
            <IconButton aria-label="delete">
                <EditOutlined />
            </IconButton>
        </Box>
    )
}