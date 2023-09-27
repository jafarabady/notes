import './Folders.css'
import React, {useEffect, useRef, useState} from 'react';
import FolderIcon from '@/assets/images/foldericon.png'
import NavBarItem from "@/component/NavBar/NavBarItem.jsx";
import addFolderIcon from '@/assets/images/add-folder.png'
import openFolder from '@/assets/images/open-folder.png'
import Button from "@/component/Ui/Button/index.jsx";
import Input from "@/component/Ui/Input/index.jsx";

const initialFolders = [
    {
        title: 'همه یادداشت‌ها',
        id: 1
    },
    {
        title: 'کاری',
        id: 2
    },
    {
        title: 'مسافرت',
        id: 3
    },
    {
        title: 'رویدادها',
        id: 4
    },
    {
        title: 'باشگاه',
        id: 5
    },
]

function Index(props) {
    const [selected, setSelected] = useState(null)
    const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [folders, setFolders] = useState(initialFolders)
    const inputRef = useRef(null)

    function addFolder() {
        setFolders([{title: inputValue, id: folders.length + 1}, ...folders])
        setShowInput(false)
        setInputValue(null)

    }

    useEffect(() => {
        const handleClick = (event) => {
            const isClickedForm = event.target.closest(".add-folder,#folders-title")
            console.log('mmd')
            if (!isClickedForm) {
                setShowInput(false)
            }
        }
        if (showInput) {
            document.body.addEventListener("click", handleClick)
        }
        return () => {
            document.body.removeEventListener("click", handleClick)
        }
    }, [showInput])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    function show() {
        setShowInput(true)
    }

    function hideInput() {
        setShowInput(false)
    }

    function changValue(event) {
        setInputValue(event.target.value)
    }


    return (
        <div id='folders'>
            <div id='folders-title'>
                <div className="folders-title-item">پوشه ها</div>
                <div className="folders-title-item">
                    <button id='folders-button' onClick={show}>
                        <img draggable="false" src={addFolderIcon} alt={''}/>
                    </button>
                </div>
            </div>
            <div id='folders-list'>
                {showInput && (<form className='add-folder' onSubmit={addFolder}>
                    <div className="navbar-item-title">
                        <img draggable="false" src={FolderIcon} alt='icon'/>
                    </div>
                    <div className="">
                        <Input type={'text'} placeholder={'نام پوشه'} onChange={changValue} inputRef={inputRef}/>
                        <div className="label-box">
                        </div>
                    </div>
                    <div>
                        <Button type={'submit'} variant={'green'}>Ok</Button>
                    </div>
                    <div>
                        <Button onClick={hideInput} variant={'red'}>Cancel</Button>
                    </div>
                </form>)}
                {
                    folders.map((item) => {
                        return (<NavBarItem key={item.id}
                                            {...item}
                                            isSelected={item.id === selected}
                                            onClick={() => setSelected(item.id)}
                                            icon={item.id === selected ? openFolder : FolderIcon}/>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Index;