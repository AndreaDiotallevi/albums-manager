import React from 'react';
import { shallow } from 'enzyme';
import LoanFilter from './LoanFilter';

describe('LoanFilter', () => {
  it('should change the state of name from input field', () => {
    const wrapper = shallow(<LoanFilter />);

    const nameInputField = wrapper.find({ id: 'loan-filter-name' });
    nameInputField.simulate('change', { target: { value: 'Andrea' } });

    expect(wrapper.state().name).toEqual('Andrea');
  })

  it('should change the props location path when on form onSubmit', () => {
    const historyMock = { push: jest.fn() };
    const props = { history: historyMock };
    const wrapper = shallow(<LoanFilter {...props}/>);

    wrapper.setState({ name: 'Andrea' });
    const mockedEvent = { preventDefault() {} };
    wrapper.instance().handleLoanFilter(mockedEvent);

    expect(historyMock.push.mock.calls[0]).toEqual(['/albums/?loanedTo=Andrea']);
  })
});
