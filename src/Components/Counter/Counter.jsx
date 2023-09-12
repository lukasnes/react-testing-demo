import './Counter.css'
import { useState } from 'react'

export default function Counter(){
    const [counter,setCounter] = useState(0)

    const decrement = (evt) => {
        setCounter(counter - 1)
    }
    const increment = (evt) => {
        setCounter(counter + 1)
    }
    return (
        <section id="counter-container">
            <button onClick={decrement}>-</button>
            <h2>{counter}</h2>
            <button onClick={increment}>+</button>
        </section>
    )
}