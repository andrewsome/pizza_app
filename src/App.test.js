import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

const event = {
  preventDefault: () => {},
};

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((<App />));
  });

  it('renders children when passed in', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('<Topping />', () => {
    it('increase toppings numbers by 1 when calling handleToppingOrder', () => {
      const topping = 'bacon';

      const currentNumbers = 3;

      wrapper.setState({
        chosenToppings: {
          [topping]: {
            numbers: currentNumbers,
          },
        },
      });

      const { handleToppingOrder } = wrapper.find('ToppingOptions').props();

      handleToppingOrder(event, topping);

      const numbersAfterCallOnce = currentNumbers + 1;
      expect(wrapper.state().chosenToppings[topping]).toHaveProperty('numbers', numbersAfterCallOnce);

      const clickTimes = 5;
      for (let i = 0; i < clickTimes; i ++) {
        handleToppingOrder(event, topping);
      }

      expect(wrapper.state().chosenToppings[topping]).toHaveProperty('numbers', numbersAfterCallOnce + clickTimes);
    });
  });

  describe('<OrderSummery />', () => {
    let orderSummery;

    beforeEach(() => {
      orderSummery = wrapper.find('OrderSummery');
    });

    describe('props', () => {
      let props;

      beforeEach(() => {
        props = orderSummery.props();
      });

      it('passes chosenSize', () => {
        expect(props).toHaveProperty('chosenSize', wrapper.state().chosenSize);
      });
  
      it('passes chosenToppings', () => {
        expect(props).toHaveProperty('chosenToppings', wrapper.state().chosenToppings);
      });

      it('increases topping numbers by 1 with given numbers when calling handleIncrease', () => {
          const topping = 'bacon';
          
          const numbers = 2;

          orderSummery.props().handleIncreace(event, topping, numbers);

          expect(wrapper.state().chosenToppings[topping]).toHaveProperty('numbers', numbers + 1);
      });

      it('decreases topping numbers by 1 with given numbers when calling handleDecrease', () => {
        const topping = 'bacon';
        
        const numbers = 2;

        orderSummery.props().handleDecreace(event, topping, numbers);

        expect(wrapper.state().chosenToppings[topping]).toHaveProperty('numbers', numbers - 1);
      });
    });
  });
});