import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album', () => {
  it('should render the album info', () => {
    const props = {
      albums: [{ _id: 0, artist: 'Tycho', title: 'Awake', posterURL: 'url', tracks: ['track'] }],
      match: { params: { id: 0 } }
    };

    const wrapper = shallow(<Album {...props}/>);

    expect(wrapper.find("[data-test='album-page-title']").text()).toEqual('Awake');
    expect(wrapper.find("[data-test='album-page-artist']").text()).toEqual('Tycho');
    expect(wrapper.find("[data-test='album-page-poster']").props().src).toEqual('url');
    expect(wrapper.find("[data-test='album-page-track-name']").text()).toEqual('track');
  });
});
