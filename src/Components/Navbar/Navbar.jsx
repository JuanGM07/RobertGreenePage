import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Robert Greene Quotes</a>
        <nav className="navbar">
            <a href="/books">Books</a>
            <a href="/quotes">Best Quotes</a>
            <a href="/about">About Robert Greene</a>
            <a href="/me">About Me</a>
        </nav>
    </header>
  )
}

export default Navbar