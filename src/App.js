import './css/App.css';
import React, { useState } from 'react';
import Header from './components/header';
import StatsContainer from './components/StatsContainer';
import Tarea from './components/Tarea';

function App() {

  const [component, setComponent] = useState("");
  const [tareas, setTareas] = useState([]);
  const [numberTask, setNumberTask] = useState(0)
  const [deleteTask, setdeleteTask] = useState(0)
  const [completedTask, setcompletedTask] = useState(0)

  const recibirTareas = task => {
    if(task.content){
      setNumberTask(numberTask + 1);
      const tareasActualizadas = [task, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
      setTareas(tareasActualizadas);
      setdeleteTask(deleteTask + 1)
      setNumberTask(numberTask - 1)
  }

const completarTarea = id => {
  const tareasActualizadas = tareas.map(tarea =>{
    if(tarea.id == id){
        tarea.completada = !tarea.completada;
        if(tarea.completada){
          setcompletedTask(completedTask + 1);
          setNumberTask(numberTask - 1)
        }else{
          setcompletedTask(completedTask - 1);
          setNumberTask(numberTask + 1)
        } 
    }
    return tarea;
    });
    setTareas(tareasActualizadas)
}


  return (
    <div className="App">

      <Header addForm={setComponent} sendTask={recibirTareas} />

      <div className='App__grid'>

      {/*Contenedor 1 */}
      <div className='App__grid__container stats__container'>
      <p style={{textAlign: "center", paddingTop: "10px"}}>My Tasks:</p>
        <StatsContainer numberTask={numberTask} deleteTask={deleteTask} completedTask={completedTask} />
      </div>

      {/* //Contenedor 2 */}
      <div className='App__grid__container tarea'>
        {component}
        {tareas.map((tarea) => 
        <Tarea 
        task={tarea.content}
        id={tarea.id}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
        key={tarea.id}
        completada={tarea.completada}
         />)}
      </div>

      
      </div>
    </div>
  );
}

export default App;
