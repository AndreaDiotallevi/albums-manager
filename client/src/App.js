import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AlbumList from './components/AlbumList/AlbumList';
import Album from './components/Album/Album'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/albums' component={AlbumList} />
        <Route path='/albums/:id' component={Album} />
      </BrowserRouter>
    </div>
  );
};

export default App;
