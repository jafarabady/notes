import React, {useState} from 'react';
import './More.css'
import favorite from '@/assets/images/favorite-icon.png'
import trash from '@/assets/images/deleted.png'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
const moreList = [
    {
        id:1,
        title:'علاقه مندی ها',
        icon:favorite,

    },
    {
        id:2,
        title:'حذف شده ها',
        icon: trash,
    },

]
function Index(props) {
    const [selected,isSelected] = useState(null)
    return (
        <div id='more'>
            <span id='title-text'>بیشتر</span>
            <div id='more-list'>
                {
                    moreList.map((item)=>{
                        return (<NavBarItem  key={item.title}
                                             {...item}
                                             isSelected={item.id===selected}
                                             onClick={()=>isSelected(item.id)}/>)
                    })
                }
            </div>

        </div>
    );
}

export default Index;