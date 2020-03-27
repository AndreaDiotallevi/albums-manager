import React from 'react';
import axios from 'axios';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: '', title: '', posterURL: '', tracks: [] };
  };

  componentDidMount() {
    this.fetchAlbum();
  }

  fetchAlbum = async () => {
    const id = this.props.match.params.id;
    await axios.get(`/api/albums/${id}`)
    .then(res => {
      this.setState({
        artist: res.data.artist,
        title: res.data.title,
        posterURL: res.data.posterURL,
        tracks: res.data.tracks
      });
    });
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
