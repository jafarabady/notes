import React from 'react';
import './NoteListItem.css'
function Index(props) {


    const style={borderColor:props.color ,backgroundColor:props.selected ? 'white':'#FCF1E3'}
    return (
        <div id='note-list-items' >
            <div className="items" style={style} onClick={props.onClick}>
                <span className='title-note'>{props.title}</span>
                <div className='date-text'>
                    <div className='text-items'>{props.text}</div>
                    <div>{props.date}</div>
                </div>
            </div>
        </div>
    );
}

export default Index;
