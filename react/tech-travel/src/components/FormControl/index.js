import React, { useState } from "react";

const FormControlled = () => {
    const [ value, setValue ] = useState("");

    const onChange = (event) => {
        setValue(event.currentTarget.value);
    }

    const ABC = (event) => {
        event.preventDefault();
        console.log(value);
    }

    return (
        <form onSubmit={ABC}>
            <h1>My input</h1>
            <input value={value} onChange={onChange}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormControlled;