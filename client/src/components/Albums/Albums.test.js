import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Albums', () => {
  it('should render without errors', () => {
    const wrapper = setUp(Albums, {});
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the title YOUR ALBUMS", () => {
    const wrapper = setUp(Albums, {});
    const h1 = wrapper.find("[data-test='albums-page-title']");
    expect(h1.text()).toEqual('YOUR ALBUMS');
  });
});
