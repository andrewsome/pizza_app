import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'
Enzyme.configure({ adapter: new Adapter() });

it('renders children when passed in', () => {
    const wrapper = shallow((
        <Header>
            <div className="unique" />
        </Header>
    ));
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
});