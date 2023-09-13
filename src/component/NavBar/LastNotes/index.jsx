import React from 'react';
import './LastNotes.css'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
import docs from '@/assets/images/docs.png'
const lastNotes = [
    {
        name: 'سلام'
    },
    {
        name: 'خدافظ'
    },
    {
        name: 'هعب'
    },
]

function Index(props) {
    return (
        <div id='last-note'>
            <span id='title-text'>آخرین یادداشت‌ها</span>
            <div id='last-note-list'>
                {lastNotes.map((item) => {
                        return (<NavBarItem key={item.name} text={item.name} icon={docs}/>)
                    }
                  )
                }


            </div>

        </div>);
}

export default Index;