import React from 'react';
import axios from 'axios';

const lastFmApiKey = require('../../config/keys').lastFmApiKey;

class AlbumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: '', title: '', notFound: false };
  };

  handleArtistChange = event => {
    this.setState({ artist: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleAddAlbum = async event => {
    event.preventDefault();

    await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=${this.state.artist}&album=${this.state.title}&format=json`)
      .then(async res => {
        if (res.data.message === 'Album not found') {
          this.setState({ artist: '', title: '', notFound: true });
          return
        } else {    
          const album = {
            artist: res.data.album.artist,
            title: res.data.album.name,
            posterURL: res.data.album.image[4]['#text'],
            tracks: res.data.album.tracks.track.map(track => track.name)
          }
          await axios.post('/api/albums', album)
            .then(res => {
              this.props.refreshAlbums();
              this.setState({ artist: '', title: '', notFound: false });
            }).catch(err => console.log(err));
        }
      });
  };

  render() {
    return (
      <div id='album-input-component'>
        <form id='album-input-form' onSubmit={this.handleAddAlbum}>
          <input id='album-input-artist' type='text' name='artist' placeholder="Album's artist" value={this.state.artist} onChange={this.handleArtistChange}/>
          <input id='album-input-title' type='text' name='title' placeholder="Album's title" value={this.state.title} onChange={this.handleTitleChange}/>
          <button id='album-input-button' type='submit'>Add Album</button>
        </form>
        {this.state.notFound && <p className='message-to-user'>Not Found</p>}
      </div>
    );
  };
};

export default AlbumInput;
