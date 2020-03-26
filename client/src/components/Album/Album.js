import React from 'react';
import axios from 'axios';
const lastFmApiKey = require('../../config/keys').lastFmApiKey;

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      title: '',
      posterURL: '',
      tracks: []
    }
  }

  async componentDidMount() {
    const artist = this.props.match.params.artist;
    const title = this.props.match.params.title;
    await axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=${artist}&album=${title}&format=json`)
      .then(res => {
        this.setState({
          artist: res.data.album.artist,
          title: res.data.album.name,
          posterURL: res.data.album.image[4]['#text'],
          tracks: res.data.album.tracks.track.map(track => track.name)
        })
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>{this.state.artist}</h3>
        <img src={`${this.state.posterURL}`} alt={`${this.state.title}-poster`}></img>
      </div>
    )
  }
}

export default Album;
