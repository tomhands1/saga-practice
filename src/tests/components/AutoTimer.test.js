import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AutoTimer from '../../components/AutoTimer';

Enzyme.configure({ adapter: new Adapter() });

describe('<AutoTimer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AutoTimer />);
  });

  it('Displays the component', () => {
    expect(wrapper.exists('.auto-timer')).toBeTruthy();
  });
});