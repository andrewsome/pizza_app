import React from 'react';
import { shallow } from 'enzyme';
import Size,{StyledImage} from './Size'


describe('<Size />', () => {  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((<Size />));
  });

  it('renders three <StyledImage /> Components', () => {

    expect(wrapper.find(StyledImage).first().props()).toHaveProperty('width','20%');
  });
});