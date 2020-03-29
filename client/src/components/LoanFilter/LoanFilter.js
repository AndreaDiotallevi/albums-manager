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
    this.setState({ name: '' });
  };

  render() {
    return (
      <div id='loan-filter-component'>
        <form id='loan-filter-form' onSubmit={this.handleLoanFilter}>
          <label id='loan-filter-name-label'>
            Name:
            <input id='loan-filter-name' type='text' name='name' value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <button id='loan-filter-button' type='submit'>Filter Loans</button>
        </form>
      </div>
    );
  };
};

export default LoanFilter;
