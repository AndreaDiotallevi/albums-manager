import React from 'react';
import axios from 'axios';

const dateFormat = require('dateformat');

class ReturnInput extends React.Component {
  handleReturnAlbum = async event => {
    event.preventDefault();

    const album = this.props.album;
    album.loanedTo = null;

    await axios.patch(`/api/albums/${album._id}`, album)
      .then(res => {
        this.props.refreshAlbum();
      }).catch(err => console.log(err));
  };

  formatDate = () => {
    return dateFormat(this.props.album.loanedDate, "mmmm dS, yyyy");
  }

  render() {
    return (
      <div id='return-input-component'>
        <p className='loaned-to-text'>Loaned to {this.props.album.loanedTo}</p>
        <p className='loaned-date-text'>{`(${this.formatDate()})`}</p>
        <form id='return-input-form' onSubmit={this.handleReturnAlbum}>
          <button id='return-input-button' type='submit'>Mark As Returned</button>
        </form>
      </div>
    );
  };
};

export default ReturnInput;
