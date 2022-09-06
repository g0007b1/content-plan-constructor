import {useActions} from "../../../hooks/useActions";
import React, {Children} from "react";
// import moment from "moment";

export const ColoredDateCellWrapper = ({children, value}) => {

    // const CURRENT_DATE = moment().toDate();

    const {setCurrDate} = useActions()
    const onClickDate = (slotInfo) => {
        setCurrDate(slotInfo)
    }
    return (
        React.cloneElement(Children.only(children), {
            // style: {
            //     ...children.style,
            //     backgroundColor: value < CURRENT_DATE ? 'lightgreen' : 'lightblue',
            // },
            onMouseEnter: () => {
                onClickDate(value)
            }
        }))
};