import React from 'react';
import '../css/stats.css';
import Stats from './Stats';

const StatsContainer = ( { numberTask= 0, deleteTask = 0, completedTask = 0 } ) => {
    return (
        <div className='stats__contenedor'>
            <Stats name="PENDING" number={numberTask} />
            <Stats name="COMPLETE" number={completedTask} />
            <Stats name="ERRASED" number={deleteTask} />
        </div>
    );
}
 
export default StatsContainer;