import React from 'react'
import {useState} from  'react'
import ToDo from './ToDo'

export default function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)

    
  return (
    <div>
        <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
        {showTodo && <ToDo />}
    </div>
  )
}
