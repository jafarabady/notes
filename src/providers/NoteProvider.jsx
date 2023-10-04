import {createContext, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
const currDate = new Date().toLocaleDateString('fa-IR',{ year: 'numeric', month: 'long', day: 'numeric' });
const noteList = [
    {
        id: 1,
        title: 'خلاصه جلسه ۱۲ صد کدرز',
        text: 'میخوام یک سری کارهارو انجام بدم',
        date: '۱شهریور۱۴۰۲',
        color: '#4C86A8'
    },
    {
        id: 2,
        title: 'کتاب‌هایی که می‌خوام بخونم',
        text: 'میخوام یک سری کارهارو انجام بدممیخوام یک سری کارهارو انجام بدم',
        date: '۲شهریور۱۴۰۲',
        color: '#38A3A5'
    },
    {
        id: 3,
        title: 'هدف من برای سال جدید',
        text: 'میخوام یک سری کارهارو انجام بدم',
        date: '۳شهریور۱۴۰۲',
        color: '#8377D1'
    },
]
const noteContext = createContext();

const NoteProvider = ({children}) => {
    const navigate=useNavigate();
    const {noteId} = useParams();
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('noted'))||noteList);
    const [isNewNote, setIsNewNote] = useState(false);


    const updateNote = (key, newValue) => {
        if (noteId == 0) {
            const newNote = {
                id: notes.length + 1,
                [key]:newValue,
                date: currDate,
                color: '#8377D1'
            }
            const newNotes =[newNote,...notes]
            setNotes(newNotes)
            localStorage.setItem('noted',JSON.stringify(newNotes))
            navigate(`/note/${newNote.id}`)
            return
        }
        const newNote = notes.map((item) => {
            if (item.id != noteId) {
                return item
            } else {
                item[key] = newValue
                return item
            }
        })

        setNotes(newNote)
        localStorage.setItem('noted',JSON.stringify(newNote))
    }
    const value = {
        notes,
        isNewNote,
        updateNote,
        noteId,
    };
    return <noteContext.Provider value={value}>{children}</noteContext.Provider>

}
export {NoteProvider, noteContext}