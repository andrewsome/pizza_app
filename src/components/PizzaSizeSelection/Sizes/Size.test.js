import React from 'react';
import { shallow } from 'enzyme';
import Size from './Size'


describe('<Size />', () => {  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((<Size />));
  });

  it('renders three <StyledImage /> Components', () => {
    console.log(wrapper.instance().width)

    expect(wrapper.find('StyledImage')).toHaveProperty('width', wrapper.instance().height);
  });

  it('renders three <StyledImage /> Components', () => {
    console.log(wrapper.instance().height)
    console.log('worked')
    expect(wrapper.find('StyledImage')).toHaveProperty('height', wrapper.instance().height);
  });

  it('renders three <StyledImage /> Components', () => {
    console.log(wrapper.instance().onClick)

    expect(wrapper.find('StyledImage')).toHaveProperty('onClick', wrapper.instance().onClick);
  });

});