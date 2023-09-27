import React, {useContext, useState} from 'react';
import './Header.css'
import logo from '@/assets/images/Group 1.png'
import searchLogo from '@/assets/images/Frame.png'
import {noteContext} from "@/providers/NoteProvider.jsx";


function Index() {
    const value = useContext(noteContext)
    const handleNewNote = ()=>{
        value.toggleNewNote()
    }
    return (
        <header id={'header'}>
            <div id='logos'>
                <div>
                    <img draggable="false" src={logo} alt="noted logo"/>
                </div>
                <div>
                    <button id='button-new-note'>
                        <img draggable="false" src={searchLogo} alt="search"/>
                    </button>
                </div>
            </div>
            <div id='new-note'>
                <button id='btn-new-note' onClick={handleNewNote}>
                    <span>+ یادداشت جدید</span>
                </button>
            </div>
        </header>


    );
}

export default Index;