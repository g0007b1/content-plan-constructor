import {memo} from "react";
import {useSelector} from "react-redux";
import {BoardTitle} from "../BoardTitle";
import {useActions} from "../../hooks/useActions";
import {Box, Container, Typography} from "@mui/material";

export const TitleList = memo(() => {
    const list = useSelector(state => state.boardReducer.titleList)
    const login = useSelector(state => state.userReducer.login)
    const {addBoard} = useActions()
    const linksArray = list.map((link, index) => <BoardTitle key={link + index} title={link.title} link={link.link}/>)
    const addBoardHandler = () => {
        addBoard(list.length, login)
    }
    return (
        <Container>
                <Typography component="h1" variant="h5">Мои Контент-планы</Typography>
                {linksArray}
                <button onClick={addBoardHandler}>+</button>
        </Container>
    )
})