import React from "react";

//single Input function with props of type and placeholder
function Input(props) {
    return (
        <div>
        <input type={props.type} placeholder={props.placeholder} />
        </div>
        
    )
}

export default Input;