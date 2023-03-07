import React, {useEffect, useState} from 'react'
import "./note.css"
import axios from "axios";
import {Link} from "react-router-dom"


const Note = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = async() => {
        const response = await axios.get("http://localhost:5000/")
        setNotes(response.data);
    }
  return (
    <div>
        {
            notes.map((note, index) => (
                <Link to="/edit/:id" className='note' key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </Link>
            ))
        }

    <Link to="/create" className='add_btn'><i class="fas fa-plus-circle"></i></Link>
    </div>
  )
}

export default Note