import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react'

export default function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1


    })

    const onClick = () => {
        setInc((prevState) => {
            return prevState + 1
        })
    }
    

    return (
        <div>
            <input type="number" className="form-control w-23" value={number} 
                onChange={(e) => setNumber(e.target.value)}/>
            
            <button className="btn btn-primary" onClick={onClick}>Rerender</button>
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}
