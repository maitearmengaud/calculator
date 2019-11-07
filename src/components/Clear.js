import React from 'react'

const Clear = (props) => {
    return <button className="clear-button" onClick={() => props.buttonClick(props.children)}>{ props.children }</button>

}

export default Clear