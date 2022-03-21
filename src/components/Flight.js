import React from 'react';
import Images from './Images';


const Flight = () => {
    return (
    <div style={{display:"flex", flexDirection:"row"}} className="FlightContainer">
        <div style={{display: "flex", flexDirection:"row"}} className="ImgSource">
        {/* <img src={images} alt ="image-logo" height ="25px" /> */}
        <Images/>
            <h6>Flight</h6>
        </div>
    </div>
    );
    
}

export default Flight

