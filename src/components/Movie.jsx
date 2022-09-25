import React from 'react';

export default function Movie({ name, genre, year }) {
  return (
    <div className="card">
      <div className="container">
        <h2>{name}</h2>
        <h4>
          {genre} - {year}
        </h4>
      </div>
    </div>
  );
}
