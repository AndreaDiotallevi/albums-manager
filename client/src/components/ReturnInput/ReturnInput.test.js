import React from 'react';
import { shallow } from 'enzyme';
import ReturnInput from './ReturnInput';
import mockAxios from 'axios';

describe('ReturnInput', () => {
  it('should handle the album return', () => {
    const props = {
      album: { _id: 0, loanedTo: 'Andrea' },
      refreshAlbum: () => {}
    };

    const wrapper = shallow(<ReturnInput {...props}/>);

    const form = wrapper.find({ id: 'return-input-form' });
    form.simulate('submit', { preventDefault() {} });

    expect(mockAxios.patch).toHaveBeenCalledTimes(1);
    expect(mockAxios.patch).toHaveBeenCalledWith('/api/albums/0', {'_id': 0, 'loanedTo': null});
  });

  it('should catch the error if the patch request is rejected', () => {
    mockAxios.patch.mockImplementationOnce(() => Promise.reject('error'));

    const props = {
      album: { loanedTo: 'Andrea' }
    };

    const wrapper = shallow(<ReturnInput {...props}/>);

    const mockedEvent = { preventDefault() {} };

    wrapper.instance().handleReturnAlbum(mockedEvent)
    .catch(e => {
      expect(e).toEqual('error');
    });
  })
});

afterEach(() => {    
  jest.clearAllMocks();
});
