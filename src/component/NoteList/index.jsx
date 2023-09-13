import React from 'react';
import './NoteList.css'
import NoteListItem from "./NoteListItem/index.jsx";
const noteList = [
    {
        title:'خلاصه جلسه ۱۲ صد کدرز',
        text:'میخوام یک سری کارهارو انجام بدم',
        date:'۱شهریور۱۴۰۲'
    },
    {
        title:'کتاب‌هایی که می‌خوام بخونم',
        text:'میخوام یک سری کارهارو انجام بدم',
        date:'۱شهریور۱۴۰۲'
    },
    {
        title:'هدف من برای سال جدید',
        text:'میخوام یک سری کارهارو انجام بدم',
        date:'۱شهریور۱۴۰۲'
    }
]
function Index(props) {
    return (
        <div id='note-list'>
            <span id='note-list-title'>همه یادداشت‌ها</span>
            {
             noteList.map((item)=>{
                 return <NoteListItem key={item.title} title={item.title} text={item.text} date={item.date}/>
             })
            }

        </div>

);
}

export default Index;