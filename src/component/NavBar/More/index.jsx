import React from 'react';
import './More.css'
import favorite from '@/assets/images/favorite-icon.png'
import deleted from '@/assets/images/deleted.png'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
const moreList = [
    {
        title:'علاقه مندی ها',
        icon:favorite,

    },
    {
        title:'حذف شده ها',
        icon: deleted,
    },

]
function Index(props) {
    return (
        <div id='more'>
            <span id='title-text'>بیشتر</span>
            <div id='more-list'>
                {
                    moreList.map((title)=>{
                        return (<NavBarItem key={title.title} text={title.title} icon={title.icon} />)
                    })
                }
            </div>

        </div>
    );
}

export default Index;