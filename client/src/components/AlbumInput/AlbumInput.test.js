import React from 'react';
import { shallow } from 'enzyme';
import AlbumInput from './AlbumInput';
import mockAxios from 'axios';
const lastFmApiKey = require('../../config/keys').lastFmApiKey;

describe('AlbumInput', () => {
  it('should change the state of artist and title from input field', () => {
    const wrapper = shallow(<AlbumInput />);

    const artistInputField = wrapper.find({ id: 'album-input-artist' });
    const titleInputField = wrapper.find({ id: 'album-input-title' });

    artistInputField.simulate('change', { target: { value: 'Tycho' } });
    titleInputField.simulate('change', { target: { value: 'Awake' } });

    expect(wrapper.state().artist).toEqual('Tycho');
    expect(wrapper.state().title).toEqual('Awake');
  })

  it('should fetch the album info', async () => {
    const albumData = {
      album: {
        artist: 'Tycho',
        name: 'Awake',
        image: [null, null, null, null, { '#text': 'url' }],
        tracks: { track: [{ name: 'Awake' }] }
      }
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: albumData
    }));

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: [{
        artist: 'Tycho',
        title: 'Awake',
        posterURL: 'url',
        tracks: ['Awake']
      }]
    }))

    const props = { refreshAlbums: () => {} };
    const wrapper = await shallow(<AlbumInput {...props}/>);
    wrapper.setState({ artist: 'Tycho', title: 'Awake' });

    const form = wrapper.find({ id: 'album-input-form' });
    form.simulate('submit', { preventDefault() {} });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=Tycho&album=Awake&format=json`);
  });
});

afterEach(() => {    
  jest.clearAllMocks();
});
