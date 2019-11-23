import React from 'react';
import './App.css';
import Info from './components/CustomerInfoHandle'
import Size from './components/PizzaSizeSelection/Sizes'
import Topping from './components/ToppingSelection/ToppingOptions'
import Price from './components/Price'
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
          singlePrice:1,
        },
        bacon: {
          numbers: 0,
          singlePrice:1,
        },
        basil: {
          numbers: 0,
          singlePrice:1,
        },
        chili: {
          numbers: 0,
          singlePrice:1,
        },
        mozzarella: {
          numbers: 0,
          singlePrice:1,
        },
        mushroom: {
          numbers: 0,
          singlePrice:1,
        },
        olive: {
          numbers: 0,
          singlePrice:1,
        },
        onion: {
          numbers: 0,
          singlePrice:1,
        },
        pepper: {
          numbers: 0,
          singlePrice:1,
        },
        pepperoni: {
          numbers: 0,
          singlePrice:1,
        },
        prawn: {
          numbers: 0,
          singlePrice:1,
        },
        sweetcorn: {
          numbers: 0,
          singlePrice:1,
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

  handleToppingOrder = (e, title) => {
    Object.keys(this.state.chosenToppings).map(key => {
      if (key === title) {
        this.setState(prevState => {
          return {
            chosenToppings: {
              ...prevState.chosenToppings,
              [key]: {
                ...prevState.chosenToppings[key],
                numbers: prevState.chosenToppings[key].numbers + 1,
              }
            }
          }
        })
      }
    })
  }

  handleIncreace = (e, key, numbers) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        chosenToppings: {
          ...prevState.chosenToppings,
          [key]: {
            ...prevState.chosenToppings[key],
            numbers: numbers + 1,
          }
        }
      }
    })
  }
  handleDecreace = (e, key, numbers) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        chosenToppings: {
          ...prevState.chosenToppings,
          [key]: {
            ...prevState.chosenToppings[key],
            numbers: numbers - 1,
          }
        }
      }
    })
  }
  
  

  render() {

    return (
      <>
        <Info />
        <Size handleChosenSize={this.handleChosenSize} />
        <Topping handleToppingOrder={this.handleToppingOrder} />
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
