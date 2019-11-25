import React from 'react';
import { shallow } from 'enzyme';
import ToppingOptions from './ToppingOptions'


describe('<ToppingOptions />', () => {

  it('renders thirteen <Button /> Components', () => {
    expect(shallow(<ToppingOptions />).find('Button').length).toBe(13);
});
});