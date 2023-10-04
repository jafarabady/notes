import React from 'react';
import './Input.css'
function Index(props) {
    return (
        <input ref={props.inputRef} type={props.type} placeholder={props.placeholder} onChange={props.onChange} autoFocus={true}/>
    );
}

export default Index;