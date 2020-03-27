import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it("should render the title ALBUMS MANAGER", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("[data-test='home-page-title']").text()).toEqual('ALBUMS MANAGER');
  });
});
