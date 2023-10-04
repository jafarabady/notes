import React from 'react';
import './Page404.css'
import {Link} from "react-router-dom";

function Page404(props) {
    return (
        <div className="section">
            <span className="error">404</span>
            <div className="page">Ooops!!! The page you are looking for is not found</div>
            <Link to={'/'}>
                <a className="back-home">Back to home</a>
            </Link>
        </div>
    );
}

export default Page404;