import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MovieItem = (props) => {
  const { id, title, rating, summary, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;
  const modifyById = props.modifyById;
  return (
    <div className="card">
      <img src={medium_cover_image} />
      <div className="card-body">
        <Link to={`/MovieDetail/${id}`}>
          <h4>{title}</h4>
        </Link>
        <p>평점 {rating}</p>
        <p>줄거리 :{summary}</p>
        <button>
          <Link to={`/MovieModify/${id}`}>수정</Link>
        </button>
        <button onClick={() => deleteById(id)}>삭제</button>
      </div>
    </div>
  );
};

export default MovieItem;
