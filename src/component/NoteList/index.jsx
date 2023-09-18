import React, {useState} from 'react';
import './NoteList.css'
import NoteListItem from "./NoteListItem/index.jsx";

const noteList = [
    {
        id: 1,
        title: 'خلاصه جلسه ۱۲ صد کدرز',
        text: 'میخوام یک سری کارهارو انجام بدم',
        date: '۱شهریور۱۴۰۲',
        color: '#4C86A8'
    },
    {
        id: 2,
        title: 'کتاب‌هایی که می‌خوام بخونم',
        text: 'میخوام یک سری کارهارو انجام بدممیخوام یک سری کارهارو انجام بدم',
        date: '۱شهریور۱۴۰۲',
        color: '#38A3A5'
    },
    {
        id: 3,
        title: 'هدف من برای سال جدید',
        text: 'میخوام یک سری کارهارو انجام بدم',
        date: '۱شهریور۱۴۰۲',
        color: '#8377D1'
    }
]

function Index(props) {
    const [isSelected, setSelected] = useState(null)
    // const handleClick=(item)=>{
    //     setSelected(item.id)
    // }

    return (
        <div id='note-list'>
            <span id='note-list-title'>همه یادداشت‌ها</span>
            {
                noteList.map((item) => {
                    return (
                        <NoteListItem key={item.title}
                                      {...item}
                                      selected={item.id===isSelected}
                                      onClick={()=> setSelected(item.id)} />
                            )
                })
            }

        </div>

    );
}

export default Index;