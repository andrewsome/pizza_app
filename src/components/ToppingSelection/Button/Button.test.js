import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';
import StyledImg from './Button';
import ButtonTitle from './Button';
import StyledButton from './Button';

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount((<Button />));
  });

  it('renders children when passed in', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('passes props to this styled component', () => {
    expect(wrapper.find(StyledImg).props()).toHaveProperty('src', wrapper.instance().src);
  });

  it('should render image on the button', () => {
    expect(wrapper.find(ButtonTitle).exists()).toBe(true);
  });

  it('should render <StyledButton />', () => {
    expect(wrapper.find(StyledButton).exists()).toBe(true);

  });

});