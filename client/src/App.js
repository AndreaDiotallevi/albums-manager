import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Albums from './components/Albums/Albums';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        { artist: 'Tycho', title: 'Awake' },
        { artist: 'Kiasmos', title: 'Blurred' }
      ]
    }
  }

    render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Home}></Route>
          <Route path="/albums" render={(routeProps) => (
            <Albums {...routeProps} albums={this.state.albums}/>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
