import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="grid-container">
      <Link to="/movieInsert">영화 등록</Link>
      <Link to="/movieList">영화 목록</Link>
    </div>
  );
};

export default Header;
