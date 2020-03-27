import React from 'react';
import axios from 'axios';

const lastFmApiKey = require('../../config/keys').lastFmApiKey;

class AlbumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: '', title: '' };
  };

  handleArtistChange = event => {
    this.setState({ artist: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleAddAlbum = async event => {
    event.preventDefault();

    await axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=${this.state.artist}&album=${this.state.title}&format=json`)
      .then(res => {
        if (res.data.message === 'Album not found') {
          console.log('Album not found');
          return
        } else {    
          const album = {
            artist: res.data.album.artist,
            title: res.data.album.name,
            posterURL: res.data.album.image[4]['#text'],
            tracks: res.data.album.tracks.track.map(track => track.name)
          }
          axios.post('./api/albums', album)
            .then(res => {
              console.log(res.data);
              this.props.updateAlbums();
            })
        }
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddAlbum}>
        <label>
          Artist:
          <input type='text' name='artist' onChange={this.handleArtistChange}/>
        </label>
        <label>
          Title:
          <input type='text' name='title' onChange={this.handleTitleChange}/>
        </label>
        <button type='submit'>Add Album</button>
      </form>
      </div>
    );
  };
};

export default AlbumInput;
