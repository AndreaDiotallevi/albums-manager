import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Albums from './components/Albums/Albums';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/albums' component={Albums}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
