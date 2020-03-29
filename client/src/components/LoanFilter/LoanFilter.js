import React from 'react';

class LoanFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleLoanFilter = async event => {
    event.preventDefault();
    this.props.history.push(`/albums/?loanedTo=${this.state.name}`);
  };

  render() {
    return (
      <div id='loan-input-component'>
        <form id='loan-input-form' onSubmit={this.handleLoanFilter}>
          <label id='loan-input-name-label'>
            Name:
            <input id='loan-input-name' type='text' name='name' onChange={this.handleNameChange}/>
          </label>
          <button id='loan-input-button' type='submit'>Filter Loans</button>
        </form>
      </div>
    );
  };
};

export default LoanFilter;
