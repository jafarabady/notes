import React, {useContext} from 'react';
import './Note.css'
import EmptyNote from "@/component/Note/EmptyNote/index.jsx";
import NoteForm from "@/component/Note/NoteForm/index.jsx";
import {noteContext} from "@/providers/NoteProvider.jsx";
function Index() {
    const value = useContext(noteContext)

    return value.isNewNote ? <EmptyNote/> : <NoteForm/>;
}

export default Index;