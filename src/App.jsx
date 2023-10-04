import NavBar from "./component/NavBar";
import NoteList from "./component/NoteList";

import './App.css'
import {NoteProvider} from "@/providers/NoteProvider.jsx";

import {Outlet} from "react-router-dom";



function App() {
    return (
        <NoteProvider>
            <NavBar />
            <NoteList/>
            <Outlet/>
        </NoteProvider>
    )
}

export default App
