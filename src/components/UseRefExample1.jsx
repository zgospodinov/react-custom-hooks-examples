import { useRef } from 'react'

export default function UseRefExample1() {
    const inputRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input ref={inputRef} id='name' type="text" className="form-control mb-2" />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
