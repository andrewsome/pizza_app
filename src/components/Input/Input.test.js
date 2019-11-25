import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './index'
Enzyme.configure({ adapter: new Adapter() });

describe('<Input />', () => {
    const wrapper = shallow(<Input />);

    it('should contain an StyledInput', () => {
        expect(wrapper.find('StyledInput')).toHaveProperty('onChange', wrapper.instance().onChange);
    });
});


//先写测试 态度要好
//unit test shallow test only test surface, must have , literly no cost
//same props get same beheavirer

//stub mock

//intergration test , make life ezier, makre sure front end and back all working ,
//simulate a mock data to do test, 

//END TO END test
//simulate user use to do test, once it passed, the more confidence it going to bulid, but its cost more

//all thoce tetst build up devlopers confidence,
//make teammember lefe easzier
//ez to debug


//but its all depence on the company willing, dose it want pay the cost,

//question going to, discuss with HR
//pyrimy => cube , tomuch change , new future can't get done, because test take too much time,
//it must have e2e test, but it not cover everythings, but when feture change, then you have to change
//test,

//test balance,

//responsive prograss enhancement, to do test after you got bug.

//what is test
//why test,
//test overlap
//test balance

//asseration 断言，发誓 以后再也不会出错了， 才有效果，  比 什么都没做  就发誓 好。