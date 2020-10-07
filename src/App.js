import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import MovieInsert from './pages/MovieInsert';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import MovieModify from './pages/MovieModify';
const App = () => {
  return (
    <div>
      <Header />
      <Route path="/MovieInsert" exact={true} component={MovieInsert} />
      <Route path="/MovieList" exact={true} component={MovieList} />
      <Route path="/MovieDetail/:id" exact={true} component={MovieDetail} />
      <Route path="/MovieModify/:id" exact={true} component={MovieModify} />
    </div>
  );
};

export default App;
