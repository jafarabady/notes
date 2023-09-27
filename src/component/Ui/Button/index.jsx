import React from 'react';
import './Button.css'


function Index(props) {
    return (
        <button className={`button button--${props.variant}`} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    );
}

export default Index;