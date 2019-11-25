import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((<App />));
  });

  it('renders children when passed in', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('handleToppingNumbersChange', () => {
    let handleToppingNumbersChange;

    beforeEach(() => {
      ({ handleToppingNumbersChange } = wrapper.instance());
    });

    it('increase toppings numbers by delta', () => {
      const topping = 'bacon';
      
      const currentNumbers = 3;
      
      wrapper.setState({
        chosenToppings: {
          [topping]: {
            numbers: currentNumbers,
          },
        },
      });

      handleToppingNumbersChange(undefined, topping, 3);

      let numbers = currentNumbers;

      numbers = numbers + 3;
      expect(wrapper.state().chosenToppings[topping]).toHaveProperty('numbers', numbers);

      handleToppingNumbersChange(undefined, topping, -1);

      numbers = numbers - 1;
      expect(wrapper.state().chosenToppings[topping]).toHaveProperty('numbers', numbers);
    });
  });

  describe('<ToppingOptions />', () => {
    it('passes handleToppingNumbersChange', () => {
      expect(wrapper.find('ToppingOptions').props()).toHaveProperty('handleToppingOrder', wrapper.instance().handleToppingOrder);
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

      it('passes handleIncreace', () => {
        expect(props).toHaveProperty('handleIncreace', wrapper.instance().handleIncreace);
      });

      it('passes handleDecreace', () => {
        expect(props).toHaveProperty('handleDecreace', wrapper.instance().handleDecreace);
      });
    });
  });
});