import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from './Container'
Enzyme.configure({ adapter: new Adapter() });


it('renders children when passed in', () => {
    const wrapper = shallow((
        <Container>
            <div className="unique" />
        </Container>
    ));
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
});