import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='note_header'>
        <h3>The Notes App</h3>
        <button className='btn'><i class="fas fa-clipboard"></i></button>
    </header>
  )
}

export default Header