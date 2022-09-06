import {useSelector} from "react-redux";
import {LoginnedLinks} from "./LoginnedLinks";
import {UnloginnedLinks} from "./UnloginnedLinks";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export const Header = (props) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        ContentPlanConstructor
                    </Typography>
                    {isAuth ? <LoginnedLinks/> : <UnloginnedLinks/>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
