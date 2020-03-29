import React from 'react';
import { shallow } from 'enzyme';
import LoanFilter from './LoanFilter';

describe('LoanFilter', () => {
  it('should change the state of name from input field', () => {
    const wrapper = shallow(<LoanFilter />);

    const nameInputField = wrapper.find({ id: 'loan-input-name' });
    nameInputField.simulate('change', { target: { value: 'Andrea' } });

    expect(wrapper.state().name).toEqual('Andrea');
  })
});
