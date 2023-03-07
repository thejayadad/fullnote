import React, {useEffect, useState} from 'react'
import "./note.css"
import axios from "axios";

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
                <div key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            ))
        }

    </div>
  )
}

export default Note