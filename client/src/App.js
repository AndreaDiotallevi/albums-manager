import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import AlbumList from './components/AlbumList/AlbumList';
import Album from './components/Album/Album'
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  };

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums = async () => {
    await axios.get('/api/albums')
    .then(res => {
      this.setState({ albums: res.data })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route
            exact path="/albums"
            render={(routeProps) => (
              <AlbumList {...routeProps} albums={this.state.albums} updateAlbums={this.fetchAlbums}/>
            )}
          />
          <Route
            path="/albums/:id"
            render={(routeProps) => (
              <Album {...routeProps} albums={this.state.albums}/>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
