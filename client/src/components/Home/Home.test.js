import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Home', () => {
  it("should render the title ALBUMS MANAGER", () => {
    const wrapper = setUp(Home, {});
    const h1 = wrapper.find("[data-test='home-page-title']");
    expect(h1.text()).toEqual('ALBUMS MANAGER');
  });
});
