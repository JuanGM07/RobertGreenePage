// src/Components/BookItem/BookItem.jsx
import React from 'react';
import './BookItem.css';

const BookItem = ({ image, title, description, year, link }) => {
  return (
    <div className="book-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="book-image" />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

export default BookItem;


