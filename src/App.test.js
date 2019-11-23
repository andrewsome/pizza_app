import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import Info from './components/CustomerInfoHandle/index'
Enzyme.configure({ adapter: new Adapter() });

it('renders children when passed in', () => {
    const wrapper = shallow((<App />));
    expect(wrapper.exists()).toBe(true);
});