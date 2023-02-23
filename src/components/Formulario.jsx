import React, { useState } from 'react';
import Container from '../elements/Container';
import "../css/formulario.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { v4 as uuidv4 } from 'uuid'; 

const Formulario = ( { addTask, sendTask } ) => {

const [input, setInput] = useState('');

    const mandarTask = event => {
        event.preventDefault()
        addTask('')
        const task = {
            id: uuidv4(),
            content: input,
            completada: false
        }
        sendTask(task)
    };

    const addInput = e => setInput(e.target.value)

    return ( 
        <Container formulario>
            <form className='formulario' onSubmit={mandarTask}>
                <input 
            type="text"
            className='form__input'
            value={input}
            onChange={addInput}
             />
             <button className='form__boton'><BiRightArrowAlt size={25} /></button>
            </form>
            </Container>
    );
}
 
export default Formulario;