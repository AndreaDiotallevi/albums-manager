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
      .then(async res => {
        if (res.data.message === 'Album not found') {
          // console.log('Album not found.');
          return
        } else {    
          // console.log("Album does exist.")
          const album = {
            artist: res.data.album.artist,
            title: res.data.album.name,
            posterURL: res.data.album.image[4]['#text'],
            tracks: res.data.album.tracks.track.map(track => track.name)
          }
          await axios.post('/api/albums', album)
            .then(res => {
              console.log('Log response:', res)
              this.props.updateAlbums();
            }).catch(err => console.log(err));
        }
      });
  };

  render() {
    return (
      <div id='album-input-component'>
        <form id='album-input-form' onSubmit={this.handleAddAlbum}>
        <label id='album-input-artist-label'>
          Artist:
          <input id='album-input-artist' type='text' name='artist' onChange={this.handleArtistChange}/>
        </label>
        <label id='album-input-title-label'>
          Title:
          <input id='album-input-title' type='text' name='title' onChange={this.handleTitleChange}/>
        </label>
        <button id='album-input-button' type='submit'>Add Album</button>
      </form>
      </div>
    );
  };
};

export default AlbumInput;
