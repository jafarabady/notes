import React, {useState} from 'react';
import './LastNotes.css'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
import docs from '@/assets/images/docs.png'

const lastNotes = [
    {
        id: 1,
        title: 'هدفم برای سال جدید',

    },
    {
        id: 2,
        title: 'کتاب‌هایی که می‌خوام بخونم',

    },
    {
        id: 3,
        title: 'خلاصه جلسه ۱۲ صدکدرز',

    },
]

function Index(props) {
    const [selected,isSelected] = useState(null)
    return (
        <div id='last-note'>
            <span id='title-text'>آخرین یادداشت‌ها</span>
            <div id='last-note-list'>
                {lastNotes.map((item) => {
                        return (<NavBarItem key={item.id}
                                            {...item}
                                            isSelected={item.id===selected}
                                            onClick={()=>isSelected(item.id)}
                                            icon={docs}/>)
                    }
                )
                }


            </div>

        </div>);
}

export default Index;