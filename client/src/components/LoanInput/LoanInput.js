import React from 'react';
import axios from 'axios';

class LoanInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleLoanAlbum = async event => {
    event.preventDefault();
    console.log('Inside load album')

    // await axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=${this.state.artist}&album=${this.state.title}&format=json`)
    //   .then(async res => {
    //     if (res.data.message === 'Album not found') {
    //       // console.log('Album not found.');
    //       return
    //     } else {    
    //       // console.log("Album does exist.")
    //       const album = {
    //         artist: res.data.album.artist,
    //         title: res.data.album.name,
    //         posterURL: res.data.album.image[4]['#text'],
    //         tracks: res.data.album.tracks.track.map(track => track.name)
    //       }
    //       await axios.post('/api/albums', album)
    //         .then(res => {
    //           console.log('Log response:', res)
    //           this.props.updateAlbums();
    //         }).catch(err => console.log(err));
    //     }
    //   });
  };

  render() {
    return (
      <div id='loan-input-component'>
        <form id='loan-input-form' onSubmit={this.handleLoanAlbum}>
        <label id='loan-input-name-label'>
          Name:
          <input id='loan-input-name' type='text' name='name' onChange={this.handleNameChange}/>
        </label>
        <button id='loan-input-button' type='submit'>Loan It To A Friend</button>
      </form>
      </div>
    );
  };
};

export default LoanInput;
