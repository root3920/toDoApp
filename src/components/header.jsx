import React, { useState } from 'react';
import '../css/header.css';
import { FiCheckSquare } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Formulario from './Formulario';


const Header = ( { addForm, sendTask } ) => {

    const [modal, setModal] = useState("")
    const mouseOver = () =>  setModal(<div className="right bubble"> Add a new task </div>)
    const mouseOut = () => setModal("")

    const addTarea = () => addForm(<Formulario addTask={addForm} sendTask={sendTask} />)

    return (
        <div className='header'>
            
            <div className='header__logo'>
            <FiCheckSquare size={40}/>
            <h1>TO-DO APP</h1>
            </div>

            <div className='header__add' onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={addTarea}>
            {modal}
            <FiPlus size={40} color={"#fff"} />
            </div>
        </div>
    );
}
 
export default Header;