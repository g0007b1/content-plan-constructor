import {memo, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {BoardTitle} from "../BoardTitle";
import {useActions} from "../../hooks/useActions";
import {Box, Container, Typography} from "@mui/material";
import {AddTitle} from "./AddTitle";

export const TitleList = memo(() => {
    const list = useSelector(state => state.boardReducer.titleList)
    const login = useSelector(state => state.userReducer.login)
    console.log(list)
    const [addMode, setAddMode] = useState(false)
    const {addBoard} = useActions()
    const linksArray = list.map((link, index) => <BoardTitle key={link + index} title={link.title} link={link.link}/>)
    const addBoardHandler = () => {
        setAddMode(!addMode)
        // addBoard(list.length, login)
    }
    const handleTitleSubmit = (title) => {
        addBoard(list.length, login, title)
        setAddMode(!addMode)
    }
    return (
        <Container>
            <Typography component="h1" variant="h5">Мои Контент-планы</Typography>
            {linksArray}
            {addMode ? <AddTitle handleTitleSubmit={handleTitleSubmit}/> : <></>}
            <button onClick={addBoardHandler}>+</button>
        </Container>
    )
})