import React from 'react';
import './EmptyNote.css'
import docIcon from '@/assets/images/docIconNote.png'

function Index(props) {
    return (

            <div className='empty-note'>
                <div className='empty-note'>
                    <img draggable={"false"} src={docIcon} alt=''/>
                    <div id='text-note'>یک یادداشت را برای نمایش انتخاب نمایید</div>
                    <div id='text-note-2'>از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید ایجاد کنید.</div>
                </div>
            </div>

    )
        ;
}

export default Index;