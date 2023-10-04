import React, {useContext, useState} from 'react';
import './NoteList.css'
import NoteListItem from "./NoteListItem/index.jsx";
import {noteContext} from "@/providers/NoteProvider.jsx";
import {Link, useParams} from "react-router-dom";


function Index(props) {
    const {noteId} = useParams()
    const {notes} = useContext(noteContext)

    return (
        <div id='note-list'>
            <span id='note-list-title'>همه یادداشت‌ها</span>
            {
                notes.map((item) => {
                    return (
                        <Link to={`/note/${item.id}`} key={item.title}>
                            <NoteListItem
                            {...item}
                            selected={item.id == noteId}/>
                        </Link>
                    )
                })
            }

        </div>

    );
}

export default Index;