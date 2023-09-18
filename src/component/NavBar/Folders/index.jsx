import './Folders.css'
import React, {useState} from 'react';
import FolderIcon from '@/assets/images/foldericon.png'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
import addFolderIcon from '@/assets/images/add-folder.png'
import openFolder from '@/assets/images/open-folder.png'

const folders = [
    {
        title: 'همه یادداشت‌ها',
        id:1
    },
    {
        title: 'کاری',
        id:2
    },
    {
        title: 'مسافرت',
        id:3
    },
    {
        title: 'رویدادها',
        id:4
    },
    {
        title: 'باشگاه',
        id:5
    },
]

function Index(props) {
const [selected,setSelected] = useState(null)


    return (
        <div id='folders'>
            <div id='folders-title'>
                <div className="folders-title-item">پوشه ها</div>
                <div className="folders-title-item">
                    <button id='folders-button'>
                        <img src={addFolderIcon} alt={''}/>
                    </button>
                </div>
            </div>
            <div id='folders-list'>
                {
                    folders.map((item) => {
                        return (<NavBarItem key={item.id}
                                            {...item}
                                            isSelected={item.id===selected}
                                            onClick={() => setSelected(item.id)}
                                            icon={item.id===selected? openFolder : FolderIcon}/>

                        )

                    })
                }

            </div>
        </div>
    );
}

export default Index;