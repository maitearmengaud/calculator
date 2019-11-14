import React from 'react'

const Delete = (props) => {
    return <button className="delete-button" onClick={() => props.buttonClick(props.children)}>{ props.children }</button>
}

export default Delete