import React from 'react';
import './App.css';
import Info from './components/CustomerInfoHandle'
import Size from './components/PizzaSizeSelection/Sizes'
import ToppingOptions from './components/ToppingSelection/ToppingOptions'
import OrderSummery from './components/Summery/'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chosenSize: {
        size:'',
        price:'',
      },
      chosenToppings: {
        anchovy: {
          numbers: 0,
          singlePrice:2,
        },
        bacon: {
          numbers: 0,
          singlePrice:1.5,
        },
        basil: {
          numbers: 0,
          singlePrice:1.2,
        },
        chili: {
          numbers: 0,
          singlePrice:.1,
        },
        mozzarella: {
          numbers: 0,
          singlePrice:.21,
        },
        mushroom: {
          numbers: 0,
          singlePrice:.41,
        },
        olive: {
          numbers: 0,
          singlePrice:.51,
        },
        onion: {
          numbers: 0,
          singlePrice:.61,
        },
        pepper: {
          numbers: 0,
          singlePrice:.91,
        },
        pepperoni: {
          numbers: 0,
          singlePrice:.81,
        },
        prawn: {
          numbers: 0,
          singlePrice:.71,
        },
        sweetcorn: {
          numbers: 0,
          singlePrice:1.1,
        },
        tomato: {
          numbers: 0,
          singlePrice:1,
        }
      }
    }
  }

  handleChosenSize = (e, key, price) => {
    e.preventDefault();
    this.setState({
      chosenSize: {
        size: key,
        price: price,
        }
    })
  }

  handleToppingOrder = (e, key) => {
    this.handleToppingNumbersChange(e, key, 1);
  }

  handleToppingNumbersChange = (event, key, delta) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    this.setState((prevState) => {
      const { numbers } = this.state.chosenToppings[key];

      return {
        chosenToppings: {
          ...prevState.chosenToppings,
          [key]: {
            ...prevState.chosenToppings[key],
            numbers: numbers + delta,
          },
        },
      };
    });
  } 

  handleIncreace = (e, key, numbers) => {
    const { numbers: thisNumbers } = this.state.chosenToppings[key];
    const finalNumbers = numbers + 1;
    const delta = finalNumbers - thisNumbers;

    this.handleToppingNumbersChange(e, key, delta);
  }

  handleDecreace = (e, key, numbers) => {
    const { numbers: thisNumbers } = this.state.chosenToppings[key];
    const finalNumbers = numbers - 1;
    const delta = finalNumbers - thisNumbers;

    this.handleToppingNumbersChange(e, key, delta);
  }

  render() {

    return (
      <>
        <Info />
        <Size handleChosenSize={this.handleChosenSize} />
        <ToppingOptions handleToppingOrder={this.handleToppingOrder} />
        <OrderSummery
          chosenSize={this.state.chosenSize}
          chosenToppings={this.state.chosenToppings}
          handleDecreace={this.handleDecreace}
          handleIncreace={this.handleIncreace}
        />
      </>
    );
  }
}

export default App;
