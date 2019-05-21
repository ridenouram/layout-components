import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Header Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
