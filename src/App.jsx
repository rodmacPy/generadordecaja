import React, { useState } from 'react'
import { GenerarCaja } from './GenerarCaja'

const generarKey = (idx) => {
    return `${new Date().getTime()}${idx}`;
}

export const App = () => {
    const [colors, setColors] = useState([])

    const onChangeColor = (e) => {
        e.preventDefault();
        setColors([...colors, e.target.inputColor.value])
        e.target.inputColor.value = ""
    }

    return (
        <div>
            <form className='form' onSubmit={onChangeColor}>
                <label htmlFor="color">Color</label>
                <input type="text" name='inputColor' />
                <button type='submit'>Add</button>
            </form>
            <div className='cajas'>
                {
                    colors.map((color, idx) => <GenerarCaja key={`${color}${idx}`} colors={color} />)
                }
            </div>

        </div>
    )
}
