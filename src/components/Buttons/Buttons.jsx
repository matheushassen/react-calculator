import React from "react";
import './Buttons.css'

export function Buttons(props) {
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>{props.label}
        </button>
    )
}