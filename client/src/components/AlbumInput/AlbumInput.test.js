import React from 'react';
import { shallow } from 'enzyme';
import AlbumInput from './AlbumInput';
import mockAxios from 'axios';
const lastFmApiKey = require('../../config/keys').lastFmApiKey;

describe('AlbumInput', () => {
  it('should change the state artist from input field', () => {
    const wrapper = shallow(<AlbumInput />);

    const artistInputField = wrapper.find({ id: 'album-input-artist' });
    artistInputField.simulate('change', { target: { value: 'Tycho' } });

    expect(wrapper.state().artist).toEqual('Tycho');
  })

  // it('should fetch the album info', async () => {
  //   const albumData = {
  //     album: {
  //       artist: 'Tycho',
  //       name: 'Awake',
  //       image: [null, null, null, null, { '#text': 'url' }],
  //       tracks: {
  //         track: [{ name: 'Awake' }, { name: 'Montana' }]
  //       }
  //     }
  //   }

  //   mockAxios.get.mockImplementationOnce(() => Promise.resolve({
  //     data: albumData
  //   }));

  //   mockAxios.post.mockImplementationOnce(() => Promise.resolve({
  //     data: [{
  //       artist: 'Tycho',
  //       title: 'Awake',
  //       posterURL: 'url',
  //       tracks: ['Awake', 'Montana']
  //     }]
  //   }))

  //   const props = { match: { params: { artist: 'Tycho', title: 'Awake' } } };

  //   const wrapper = await shallow(<AlbumInput {...props}/>);

  //   expect(mockAxios.get).toHaveBeenCalledTimes(1);
  //   expect(mockAxios.get).toHaveBeenCalledWith(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastFmApiKey}&artist=Tycho&album=Awake&format=json`);
  //   expect(mockAxios.post).toHaveBeenCalledWith(``);
  // });
});
