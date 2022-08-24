import {useState, useEffect, useRef} from 'react'
import React from 'react'

export default function UseRefExample2() {
    const [name, setName] = useState()
    const renders = useRef(1)
    const prevName = useRef()
    
    
    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    }, [name])

    const handleChange = (e) =>{
        console.log(renders.current)
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>Prev name state: {prevName.current}</h2>
            <input type="text" value={name} onChange={handleChange} className="form-control mb-3" />
        </div>
    )
}
