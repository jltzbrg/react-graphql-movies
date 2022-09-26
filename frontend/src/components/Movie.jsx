import React from 'react';

export default function Movie({ name, genre, year, image }) {
  return (
    <div className="card">
      <div className="container">
        <img
          src="https://m.media-amazon.com/images/I/71tN6EeQq8L._SL1417_.jpg"
          alt="Harry Potter Movie"
          width="100%"
          height="230px"
        />
        <h2>{name}</h2>
        <h4>
          {genre} - {year}
        </h4>
      </div>
    </div>
  );
}
