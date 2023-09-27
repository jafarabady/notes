import NavBar from "./component/NavBar";
import NoteList from "./component/NoteList";
import Note from "./component/Note";
import './App.css'
import {NoteProvider} from "@/providers/NoteProvider.jsx";



function App() {
    return (
        <NoteProvider>
            <NavBar />
            <NoteList/>
            <Note/>
        </NoteProvider>
    )
}

export default App
