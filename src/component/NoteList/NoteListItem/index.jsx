import React from 'react';
import './NoteListItem.css'
function Index(props) {
    return (
        <div id='note-list-items'>
            <div className="items">
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