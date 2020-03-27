import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumList';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('AlbumList', () => {
  it('should render the title YOUR ALBUMS', () => {
    const wrapper = setUp(AlbumList, { albums: [] });
    const h1 = wrapper.find("[data-test='albums-page-title']");
    expect(h1.text()).toEqual('YOUR ALBUMS');
  });

  it('should render the album title and artist', () => {
    const props = { albums: [{ artist: 'Tycho', title: 'Awake' }] };
    const wrapper = setUp(AlbumList, props);

    const h2 = wrapper.find("[data-test='album-title']");
    const h3 = wrapper.find("[data-test='album-artist']");

    expect(h2.text()).toEqual('Awake');
    expect(h3.text()).toEqual('Tycho');
  })
});
