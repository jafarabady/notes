import React from 'react';
import menuIcon from '@/assets/images/menuIcon.png'
import './NoteForm.css'
import folderIcon from '@/assets/images/foldericon.png'
import calenderIcon from '@/assets/images/calender.png'
function Index(props) {
    return (
        <div className='note-form'>
            <div className='note-form-header'>
                <div className='header-content'>
                    خلاصه جلسه ۱۲ صد کدرز
                </div>
                <div className='header-content'>
                    <img draggable={"false"} src={menuIcon} alt=""/>
                </div>
            </div>
            <div className='note-form-second-header'>
                <div className='second-header-content'>
                    <img draggable={"false"} src={folderIcon} alt=""/>
                    <div>پوشه</div>
                    <div>شخصی</div>
                </div>
                <div className='second-header-content'>
                    <img draggable={"false"} src={calenderIcon} alt=""/>
                    <div>زمان ایجاد</div>
                    <div>۱۸ شهریور ۱۴۰۲</div>
                </div>
            </div>
            <hr/>
                <textarea autoFocus/>
        </div>
    );
}

export default Index;