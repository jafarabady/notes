import React, {useContext, useState} from 'react';
import './LastNotes.css'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
import docs from '@/assets/images/docs.png'
import {noteContext} from "@/providers/NoteProvider.jsx";
import {Link, useParams} from "react-router-dom";


function Index(props) {
    const {notes} = useContext(noteContext)
    const {noteId} = useParams()
    const lastNotes = notes.slice(length - 3)

    return (
        <div id='last-note'>
            <span id='title-text'>آخرین یادداشت‌ها</span>
            <div id='last-note-list'>
                {lastNotes.map((item) => {
                        return (<Link key={item.id} to={`/note/${item.id}`}>
                                <NavBarItem
                                {...item}
                                isSelected={item.id == noteId}
                                icon={docs}/>
                        </Link>)


                    }
                )
                }


            </div>

        </div>);
}

export default Index;