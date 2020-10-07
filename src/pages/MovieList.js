import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem';
import '../App.css';

function MovieList() {
  const [movies, setMovies] = useState([]);

  function deleteById(id) {
    fetch('http://10.100.102.2:8000/api/movie/' + id, {
      method: 'delete',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  }
  useEffect(() => {
    fetch('http://10.100.102.2:8000/api/movie')
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);
  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <MovieItem movie={movie} deleteById={deleteById} />
      ))}
    </div>
  );
}

export default MovieList;
