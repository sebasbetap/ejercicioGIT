import React, { useState, useEffect } from "react";

const CounterFunction = () => {
    const [ count, setCount ] = useState(0);
    const [ nombre, setNombre ] = useState("Sebas");

    const sumOne = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        const newNombre = `${nombre + count}`;
        setNombre(newNombre);

        return () => {
            console.log("Finished")
        }
    },[count]);

    return (
        <div>
            <h1>{nombre}</h1>
            <p>{count}</p>
            <button onClick={() => sumOne()}>
                Sumar 1
            </button>
        </div>
        
    )
}

export default CounterFunction