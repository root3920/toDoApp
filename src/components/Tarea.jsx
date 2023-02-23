import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import "../css/tarea.css"

const Tarea = ( { task, eliminarTarea, id, completarTarea, completada } ) => {

    return (
        <div className={completada ? 'tarea-completada' : 'task'}>
             <div className='task__container1' onClick={() => completarTarea(id)}>{task}</div>
            <div style={{paddingTop: '10px', position: 'static'}} onClick={() => eliminarTarea(id)}>
                <BsFillTrashFill size={20} className="trash-can"  onClick={() => eliminarTarea(id)}/>
                </div>
        </div>
    );
};
 
export default Tarea;