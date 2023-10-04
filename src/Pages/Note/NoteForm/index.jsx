import React from 'react';
import menuIcon from '@/assets/images/menuIcon.png'
import './NoteForm.css'
import folderIcon from '@/assets/images/foldericon.png'
import calenderIcon from '@/assets/images/calender.png'

function Index({note, onUpdate}) {

    return (
        <div className='note-form'>
            <div className='note-form-header'>
                <div className='header-content'>
                    <input placeholder='عنوان یادداشت...' value={note ? note.title : ''} onChange={(e)=>onUpdate('title',e.target.value)}/>
                </div>
                <div className='header-content'>
                    <img draggable={"false"} src={menuIcon} alt=""/>
                </div>
            </div>
            <div className='note-form-second-header'>
                <div className='second-header-content'>
                    <img draggable={"false"} src={folderIcon} alt=""/>
                    <div>پوشه</div>
                    <div></div>
                </div>
                <div className='second-header-content'>
                    <img draggable={"false"} src={calenderIcon} alt=""/>
                    <div>زمان ایجاد</div>
                    <div>{note ? note.date : ''}</div>
                </div>
            </div>
            <hr/>
            <textarea placeholder='تعارف نکن هرچی خواستی بنویس...' autoFocus value={note ? note.text : ''}
                      onChange={(e)=>onUpdate('text',e.target.value)}>
            </textarea>
        </div>
    );
}

export default Index;