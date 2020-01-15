import React from 'react';
import { shallow } from 'enzyme';
import CustomerInfo from './CustomerInfo'

describe('<CustomerInfo />', () => {
	it('renders children when passed in', () => {
		const wrapper = shallow(<CustomerInfo />);
		expect(wrapper.find('Input').length).toBe(6);
	});
});


//write test and reason
// i want tdd i like tdd
//why its not good/bad
// 
//why its good,
// make myself confidentce and make teammmeber left ezier,debug ezier