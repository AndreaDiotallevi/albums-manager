import React from 'react';
import { shallow } from 'enzyme';
import ReturnInput from './ReturnInput';
import mockAxios from 'axios';

describe('ReturnInput', () => {
  it('should handle the album return', async () => {
    const props = {
      album: { _id: 0, loanedTo: 'Andrea' },
      updateAlbum: () => {}
    };

    const wrapper = await shallow(<ReturnInput {...props}/>);

    const form = wrapper.find({ id: 'return-input-form' });
    form.simulate('submit', { preventDefault() {} });

    expect(mockAxios.patch).toHaveBeenCalledTimes(1);
    expect(mockAxios.patch).toHaveBeenCalledWith('/api/albums/0', {'_id': 0, 'loanedTo': null});
  });
});

afterEach(() => {    
  jest.clearAllMocks();
});
