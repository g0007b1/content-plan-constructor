import React from "react";

export const Event = ({event}) => {
    return (
        <span>
      <strong>{event.title}</strong>
            {event.desc && ':  ' + event.desc}
    </span>
    )
}