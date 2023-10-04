import React, {useContext, useState} from 'react';
import './Header.css'
import logo from '@/assets/images/Group 1.png'
import searchLogo from '@/assets/images/Frame.png'
import {noteContext} from "@/providers/NoteProvider.jsx";
import {Link, useNavigate, useRoutes} from "react-router-dom";
import FolderIcon from "@/assets/images/foldericon.png";
import Input from "@/component/Ui/Input/index.jsx";
import Button from "@/component/Ui/Button/index.jsx";


function Index() {
    const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    function show() {
        setShowInput(true)
    }
    function hideInput() {
        setShowInput(false)
    }
    function changValue(event) {
        setInputValue(event.target.value)
        console.log(inputValue)
    }
    return (
        <header id={'header'}>
            <div id='logos'>
                <div>
                    <Link to={'/'} >
                        <img draggable="false" src={logo} alt="noted logo"/>
                    </Link>
                </div>
                <div>
                    <button id='button-new-note' onClick={show}>
                        <img draggable="false" src={searchLogo} alt="search"/>
                    </button>
                </div>
            </div>
            {showInput && (<form className='add-folder'>
                <div className="">
                    <Input type={'text'} placeholder={'جست و جو'} onChange={changValue} />
                    <div className="label-box">
                    </div>
                </div>
                <div>
                    <Button type={'submit'} variant={'green'}>Ok</Button>
                </div>
                <div>
                    <Button variant={'red'} onClick={hideInput}>Cancel</Button>
                </div>
            </form>)}
            <div id='new-note'>
                <Link to={'/note/0'}>
                    <button id='btn-new-note'>
                        <span>+ یادداشت جدید</span>
                    </button>
                </Link>
            </div>
        </header>


    );
}

export default Index;