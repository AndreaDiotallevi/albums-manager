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

    const album = this.props.album;
    album.loanedTo = this.state.name;

    await axios.patch(`/api/albums/${album._id}`, album)
      .then(res => {
        this.props.refreshAlbum();
      }).catch(err => console.log(err));
  };

  render() {
    return (
      <div id='loan-input-component'>
        <form id='loan-input-form' onSubmit={this.handleLoanAlbum}>
          <input id='loan-input-name' type='text' name='name' placeholder="Borrower's name" onChange={this.handleNameChange}/>
          <button id='loan-input-button' type='submit'>Loan It To A Friend</button>
        </form>
      </div>
    );
  };
};

export default LoanInput;
