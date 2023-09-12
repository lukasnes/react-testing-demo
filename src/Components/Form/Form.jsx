import './Form.css'
import { useState } from 'react'
import { capitalize } from '../../utils/utils.js'

export default function Form(){
    const [fruit,setFruit] = useState('apple')
    return (
        <section id="fruit-form">
            <select 
                name="fruit-select" 
                id="fruit-select"
                onChange={(evt) => setFruit(evt.target.value)}
            >
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
            </select>
            <div id="fruit-container">
                <h2>{capitalize(fruit)}</h2>
                <img src={`../../../public/${fruit}.png`} alt="" />
            </div>
        </section>

    )
}