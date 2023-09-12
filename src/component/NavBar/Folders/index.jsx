import React from 'react';
import './Folders.css'

function Index(props) {
    return (
        <div id='folders'>
            <div id='folders-title'>
                <div className="folders-title-item">پوشه ها</div>
                <div className="folders-title-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
                    </svg>
                </div>
            </div>
            <div id='folders-list'>
                <div className="folders-item">
                    <div className="folders-list-title">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/>
                        </svg>
                    </div>
                    <div className="last-note-title">
                        همه یادداشت‌ها


                    </div>
                </div>
                <div className="last-note-item">
                    <div className="last-note-title">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                             viewBox="0 0 512 512">
                            <path
                                d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/>
                        </svg>

                    </div>
                    <div className="last-note-title">
                        کاری

                    </div>
                </div>
                <div className="last-note-item">
                    <div className="last-note-title">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                             viewBox="0 0 512 512">
                            <path
                                d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/>
                        </svg>

                    </div>
                    <div className="last-note-title">
                        مسافرت

                    </div>
                </div><div className="last-note-item">
                    <div className="last-note-title">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                             viewBox="0 0 512 512">
                            <path
                                d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/>
                        </svg>

                    </div>
                    <div className="last-note-title">
                        رویدادها

                    </div>
                </div>
                <div className="last-note-item">
                    <div className="last-note-title">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                             viewBox="0 0 512 512">
                            <path
                                d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/>
                        </svg>

                    </div>
                    <div className="last-note-title">
                        باشگاه

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;