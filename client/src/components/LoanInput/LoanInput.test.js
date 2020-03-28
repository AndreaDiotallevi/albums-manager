import React from 'react';
import { shallow } from 'enzyme';
import LoanInput from './LoanInput';
import mockAxios from 'axios';

describe('LoanInput', () => {
  it('should change the state of name from input field', () => {
    const wrapper = shallow(<LoanInput />);

    const nameInputField = wrapper.find({ id: 'loan-input-name' });
    nameInputField.simulate('change', { target: { value: 'Andrea' } });

    expect(wrapper.state().name).toEqual('Andrea');
  })

  it('should handle the album loan', async () => {
    const props = {
      album: { _id: 0, leanedTo: null },
      updateAlbum: () => {}
    };

    const wrapper = await shallow(<LoanInput {...props}/>);
    wrapper.setState({ name: 'Andrea' });

    const form = wrapper.find({ id: 'loan-input-form' });
    form.simulate('submit', { preventDefault() {} });

    expect(mockAxios.patch).toHaveBeenCalledTimes(1);
    expect(mockAxios.patch).toHaveBeenCalledWith('/api/albums/0', {'_id': 0, 'leanedTo': null, 'loanedTo': 'Andrea'});
  });
});

afterEach(() => {    
  jest.clearAllMocks();
});
