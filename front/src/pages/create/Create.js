import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./create.css"
import {Link} from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const saveNote = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add", {
        title,
        content
      })
      navigate("/");
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <section>

<div className='create-note-header'>
    <Link to="/" className='btn'><i class="fas fa-backspace"></i></Link>
    <button className='btn primary'>Save</button>
  </div>
      <form className='create-note-form' onSubmit={saveNote}>
      <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      placeholder='Title'
      />
        <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      type="text"
      rows="28"
      placeholder='Content'
      ></textarea>
      <button type="submit">Submit</button>
      </form>

    </section>
  )
}

export default Create