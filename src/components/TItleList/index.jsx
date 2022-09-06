import {memo} from "react";
import {useSelector} from "react-redux";
import {BoardTitle} from "../BoardTitle";
import {useActions} from "../../hooks/useActions";

export const TitleList = memo(() => {
    const list = useSelector(state => state.boardReducer.titleList)
    const login = useSelector(state => state.userReducer.login)
    const {addBoard} = useActions()
    const linksArray = list.map((link, index) => <BoardTitle key={link + index} title={link.title} link={link.link}/>)
    const addBoardHandler = () => {
        addBoard(list.length, login)
    }
    return (
        <div>
            {linksArray}
            <button onClick={addBoardHandler}>+</button>
        </div>
    )
})