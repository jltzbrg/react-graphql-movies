import React from 'react';

export default function AddMovie() {
  return (
    <div className="addMovie">
      <form>
        <label>Name</label>
        <input type="text" required />
        <label>Genre</label>
        <input type="text" required />
        <label>Year</label>
        <input type="text" placeholder="(optional)" required />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
