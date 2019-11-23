import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomerInfo from './CustomerInfo'
Enzyme.configure({ adapter: new Adapter() });

describe('<CustomerInfo />', () => {
	it('should contain an StyledInput', () => {
		const wrapper = shallow(<CustomerInfo />);
		expect(wrapper.contains('Customer Infomation')).toBe(true);
	});
});


//write test and reason
// i want tdd i like tdd
//why its not good/bad
// 
//why its good,
// make myself confidentce and make teammmeber left ezier,debug ezier