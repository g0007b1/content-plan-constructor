import {MyCalendar} from "../../components/Calendar";
import {ContentTable} from "../../components/ContentTable";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BoardsActions} from "../../store/reducers/boards/actions";
import React from "react";
import {Container} from "@mui/material";

export const ContentPlanPage = React.memo(() => {
    const title = useSelector(state => state.boardReducer.title)
    const params = useParams()
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadSpots = async () => {
            setLoading(true);
            console.log('LOLWHY?')
            // await boardApi.updateBoard()
            await dispatch(BoardsActions.getBoard(params.id));
            setLoading(false);
        };
        loadSpots();
    }, [dispatch, params]);

    if (loading)
        return <div>LOADING</div>

    return (
        <>
        {/*info component*/}
    <h1>{title}</h1>
    <MyCalendar/>
    <ContentTable/>
    </>
)
})