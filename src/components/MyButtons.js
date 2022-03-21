import React from 'react'

const MyButtons=(props) => {
    return (
    <button style={{backgroundColor:props.background, color:props.color}}>
        {props.buttonName}</button>
    )
}

export default MyButtons