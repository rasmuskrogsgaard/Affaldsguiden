import React from 'react';

const Card = (props) => {
    const cardStyle = {
        fontSize: props.fontSize || '16px', 
        padding: props.padding || '10px', 
        width: props.width || '300px', 
        height: props.height || 'auto', 
        backgroundColor: props.backgroundColor || 'var(--primary-green)', 
        border: props.border || 'none',
        color: props.color || 'white', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
    };

    const imgStyle = {
        width: '100%',
        height: 'auto', 
    };

    return (
        <div style={cardStyle}>
            <img src={props.imageSrc} alt={props.imageAlt} style={imgStyle} />
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
};

export default Card;
