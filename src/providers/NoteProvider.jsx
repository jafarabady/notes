import {createContext, useState} from "react";

const noteContext = createContext();

const NoteProvider = ({children})=>{
    const [isNewNote,setIsNewNote] = useState(true)
    const toggleNewNote = ()=>{
        setIsNewNote(!isNewNote)
    }
    const value = {
        isNewNote,
        toggleNewNote
    };
    return <noteContext.Provider value={value}>{children}</noteContext.Provider>

}
export { NoteProvider, noteContext }