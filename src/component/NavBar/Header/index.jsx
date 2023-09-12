import React from 'react';
import './Header.css'
import logo from '../../../assets/image/Group 1.png'
import searchLogo from '../../../assets/image/Frame.png'

function Index(props) {
    return (
        <div id={'header'}>
            <div id='logos'>
                <div>
                    <img src={logo} alt="noted logo"/>
                </div>
                <div>
                    <a>
                        <img src={searchLogo} alt="search"/>
                    </a>
                </div>
            </div>
            <div id='new-note'>
                <button id='btn-new-note'>
                    <span>+ یادداشت جدید</span>
                </button>
            </div>
        </div>

    );
}

export default Index;