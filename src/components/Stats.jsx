import React from 'react';
import '../css/stats.css'

const Stats = ( { name, number } ) => {
    return ( 
        <div className='stat'>
            <h2>{number}</h2>
            <h3>{name}</h3>
        </div>
    );
}
 
export default Stats;