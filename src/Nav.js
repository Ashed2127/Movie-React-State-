import React, {useContext} from 'react';
import './Nav.css';
import {MovieContext} from './MovieContext';

export default function Nav() {

	const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav-container">
      <h3 className="nav-title">Devash</h3>
      <p className="nav-subtitle">List of Movies: {movies.length}</p>
    </div>
  );
}
 
 
