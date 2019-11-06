import React from 'react'
import './Display.css'

const Display = (props) => {
    return(
        <div className="screen"><h1>{props.display}</h1></div>
    )
}

export default Display