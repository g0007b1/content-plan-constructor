import {NavLink} from "react-router-dom";

export const BoardTitle = ({title, link}) => {
    return (
        <h1>
            <NavLink to={`/board/${link}`}>{title}</NavLink>
        </h1>
    )
}