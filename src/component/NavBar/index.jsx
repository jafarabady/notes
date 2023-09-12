import React from 'react';
import './NavBar.css'
import Header from "./Header/index.jsx";
import LastNotes from "./LastNotes/index.jsx";
import Folders from "./Folders/index.jsx";
import More from "./More/index.jsx";
function Index(props) {
    return (
        <div id={'navbar'}>
            <Header/>
            <LastNotes/>
            <Folders/>
            <More/>
        </div>
    );
}

export default Index;