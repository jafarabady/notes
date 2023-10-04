import React, {useContext} from 'react';
import './Note.css'

import {noteContext} from "@/providers/NoteProvider.jsx";
import {useParams} from "react-router-dom";
import NoteForm from "@/Pages/Note/NoteForm/index.jsx";

function Index() {
    const {noteId} = useParams()

    const {notes, updateNote} = useContext(noteContext)

    const selectedNote = notes.find(n => n.id == noteId)



    return <NoteForm note={selectedNote} onUpdate={updateNote}/>
}

export default Index;