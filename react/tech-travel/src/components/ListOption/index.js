import React from "react";
import './style.css';

const ListOption = (props) => {
    console.log(props);
    return(
        <li {...props}>{props.children} {props.tiempo}</li>
    )
}

export default ListOption;