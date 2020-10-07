import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem';
import '../App.css';

const MovieDetail = (props) => {
  const [movie, setMovie] = useState([]);
  const id = props.match.params.id;
  console.log('id:' + id);
  useEffect(() => {
    fetch('http://10.100.102.2:8000/api/movie/' + id)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }, []);

  return (
    <div className="grid-container">
      <MovieItem movie={movie} />
    </div>
  );
};

export default MovieDetail;
