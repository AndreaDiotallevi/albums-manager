import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import mockAxios from 'axios';

describe('App', () => {
  it('should fetch albums on #componentDidMount', async () => {
    const albumsData = [{ artist: 'Tycho', title: 'Awake' }];

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: albumsData
    }));

    const wrapper = await shallow(<App />);
    
    expect(wrapper.state().albums).toEqual(albumsData);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/api/albums');
  });

  it('should catch the error if the get request is rejected', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject('error'));

    const wrapper = shallow(<App />);

    wrapper.instance().fetchAlbums()
    .catch(e => {
      expect(e).toEqual('error');
    });
  })
});

afterEach(() => {    
  jest.clearAllMocks();
});
