import NavBar from "./component/NavBar";
import NoteList from "./component/NoteList";
import Note from "./component/Note";
import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Routes>

                {/*<Route exact path="/note" element={<Note/>}/>*/}
            </Routes>

            <NavBar/>
            <NoteList/>
            <Note/>
        </>
    )
}

export default App
