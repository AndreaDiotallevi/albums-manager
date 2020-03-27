import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';
import mockAxios from 'axios';

describe('Album', () => {
  it('should fetch the album info', async () => {
    const album = {
      _id: 0,
      artist: 'Tycho',
      title: 'Awake',
      posterURL: 'url',
      tracks: ['Awake', 'Montana']
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: album
    }));

    const props = { match: { params: { id: '0' } } };

    const wrapper = await shallow(<Album {...props}/>);

    expect(wrapper.state()).toEqual({
      artist: 'Tycho',
      title: 'Awake',
      posterURL: 'url',
      tracks: ['Awake', 'Montana']
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/api/albums/0');
  });
});
