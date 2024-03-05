import React from 'react';

const Button = (props) => {
   
    const buttonStyle = {
        fontSize: props.fontSize || '16px', 
        padding: props.padding || '10px', 
        width: props.width || '100px', 
        height: props.height || 'auto', 
        backgroundColor: props.backgroundColor || 'var(--primary-green)', 
        border: props.border || 'none',
        color: props.color || 'white',    
       

    };

    return (
        <button style={buttonStyle} onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default Button;
