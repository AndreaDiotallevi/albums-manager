import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';
import mockAxios from 'axios';
const lastFmApiKey = require('../../config/keys').lastFmApiKey;

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Album', () => {
  it('should fetch the album info', async () => {
    const albumData = {
      album: {
        artist: 'Tycho',
        name: 'Awake',
        image: [null, null, null, null, { '#text': 'url' }],
        tracks: {
          track: [{ name: 'Awake' }, { name: 'Montana' }]
        }
      }
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: albumData
    }));

    const props = { match: { params: { artist: 'Tycho', title: 'Awake' } } };

    const wrapper = await shallow(<Album {...props}/>);

    expect(wrapper.state()).toEqual({
      artist: 'Tycho',
      title: 'Awake',
      posterURL: 'url',
      tracks: ['Awake', 'Montana']
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=Tycho&album=Awake&format=json`);
  });
});
