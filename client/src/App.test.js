import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import mockAxios from 'axios';

describe('App', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should fetch albums on #componentDidMount', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: [
        { artist: 'Tycho', title: 'Awake' }
      ]
    }));
    const wrapper = await shallow(<App />);
    expect(wrapper.state().albums).toEqual([{ artist: 'Tycho', title: 'Awake' }]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/api/albums');
  });
});

afterEach(() => {    
  jest.clearAllMocks();
});
