import React, { Componet } from 'react';
import './Clock.css'


const Clock = ( ) => {
    const newdate = Date();
    const ContryLeading = 'lorem'
    return (
    <div className = 'clockmain-Container'>
        <div className = 'clock-container'>
            <h1 className = 'clock-h1'>
                {`Total ${12345}`}
            </h1>
            <h2 className = 'clock-h1'>
                {`Leading Country ${ContryLeading}`}
            </h2>
            <h3 className = 'clock-h1'>
                {`Infected ${123}`}
            </h3>
            <h3 className = 'clock-h1'>
                {`Deaths ${123}`}
            </h3>
            <p className = 'clock-h1'>
               <h3>Date</h3> {newdate}
            </p>
        </div>

    </div>
    )
}

export default Clock;
