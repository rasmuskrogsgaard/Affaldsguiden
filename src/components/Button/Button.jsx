import React from 'react';

const Button = (props) => {
   
    const buttonStyle = {
        fontSize: props.fontSize || '13px', 
        padding: props.padding || '15px', 
        width: props.width || '125px', 
        height: props.height || '50px', 
        backgroundColor: props.backgroundColor || 'var(--primary-green)', 
        border: props.border || 'none',
        color: props.color || 'white',    
        textAlign: props.textAlign,
        borderRadius: props.borderRadius || '10px',

    };

    return (
        <button style={buttonStyle} onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default Button;
