import React, { Component } from 'react'

const CoordinatesButton = (props) =>  {

    const clickHandler = (e) => {
        props.onReceiveCoordinates([e.clientX, e.clientY])
    }

        return (
        <button onClick={clickHandler}>Cordinates</button>
        )
        
}

export default CoordinatesButton