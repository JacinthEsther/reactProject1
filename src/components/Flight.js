import React from 'react';
import Images from './Images';


const Flight = () => {
    return (
    <div style={{display:"flex", flexDirection:"row"}} className="FlightContainer">
        <div style={{display: "flex", flexDirection:"row"}} className="ImgSource">
    
        <Images/>
            <h6>Flight</h6>
        </div>
    </div>
    );
    
}

export default Flight

