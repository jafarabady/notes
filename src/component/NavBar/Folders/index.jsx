import './Folders.css'
import React from 'react';
import FolderIcon from '@/assets/images/foldericon.png'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
import addFolderIcon from '@/assets/images/add-folder.png'
import openFolder from '@/assets/images/open-folder.png'
const folders = [
    {
        title: '1'
    },
    {
        title: '2'
    },
    {
        title: '3'
    },
    {
        title: '4'
    },
    {
        title: '5'
    },
]

function Index(props) {
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
                    folders.map((title,i) => {
                        return (<NavBarItem
                                key={title.title}
                                text={title.title}
                                isSelected={i===0}
                                icon={i===0 ? openFolder : FolderIcon}/>

                        )

                    })
                }

            </div>
        </div>
    );
}

export default Index;