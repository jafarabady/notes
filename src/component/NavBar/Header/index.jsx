import React from 'react';
import './Header.css'
import logo from '@/assets/images/Group 1.png'
import searchLogo from '@/assets/images/Frame.png'

function Index(props) {
    return (
        <header id={'header'}>
            <div id='logos'>
                <div>
                    <img src={logo} alt="noted logo"/>
                </div>
                <div>
                    <button id='button-new-note'>
                        <img src={searchLogo} alt="search"/>
                    </button>
                </div>
            </div>
            <div id='new-note'>
                <button id='btn-new-note'>
                    <span>+ یادداشت جدید</span>
                </button>
            </div>
        </header>

    );
}

export default Index;