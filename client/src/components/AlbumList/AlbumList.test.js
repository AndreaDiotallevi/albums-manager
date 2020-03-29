import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumList';

describe('AlbumList', () => {
  it('should render the title YOUR ALBUMS', () => {
    const props = { albums: [], location: { search: {} } };
    const wrapper = shallow(<AlbumList {...props} />);

    expect(wrapper.find("[data-test='albums-page-title']").text()).toEqual('YOUR ALBUM MANAGER');
  });

  it('should render the album title and artist', () => {
    const props = { albums: [{ artist: 'Tycho', title: 'Awake', posterURL: 'url' }], location: { search: {} } };
    const wrapper = shallow(<AlbumList {...props} />);

    expect(wrapper.find("[data-test='album-title']").text()).toEqual('Awake');
    expect(wrapper.find("[data-test='album-artist']").text()).toEqual('Tycho');
    expect(wrapper.find("[data-test='album-poster']").props().src).toEqual('url');
  })
});
