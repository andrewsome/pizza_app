import React, { Component } from 'react'
import Container from '../../Layout/Container'
import Header from '../Header'
import styled from 'styled-components'
import OrderModify from './OrderModify'

const StyledDiv = styled.div`
  font-size:3rem;
  line-height:4rem;
`;

const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  width:5rem;
  font-size:4rem;
  line-height:4rem;
  cursor:pointer;
`;

export default class OrderSummery extends Component {
  constructor(props){
    super(props)

    this.state = {
      sizeOrdered: this.props.chosenSize,
    }
  }
  
  static getDerivedStateFromProps(props, state) {
      return {
        sizeOrdered: props.chosenSize,
      };
  }

  render() {
    const { chosenToppings } = this.props;
    const { size, price } = this.state.sizeOrdered;
    return (
      <Container>
        <Header>Order Summery</Header>
          <StyledDiv>
            <StyledList>
              <StyledDiv>
                {size !==''? `you ordered ${size} size base` :''} 
              </StyledDiv>
              <StyledDiv>
                {price !==''? `$ ${price}`:''}
              </StyledDiv>
            </StyledList>
          </StyledDiv>
          {Object.keys(chosenToppings).map((key) => {
            const { numbers, singlePrice } = chosenToppings[key]
              return(
               
                <StyledList key={key} numbers={numbers} >
                   {numbers>0?
                   <>
                  <StyledDiv >
                  {key}
                  </StyledDiv>
                  <StyledDiv>
                      <StyledButton 
                      onClick={(e)=>this.props.handleDecreace(e,key,numbers)}>-</StyledButton>
                      {` ${numbers} `}
                      <StyledButton 
                      onClick={(e)=>this.props.handleIncreace(e,key,numbers)}>+</StyledButton>
                  </StyledDiv>
                  <StyledDiv>
                  {`$ ${numbers * singlePrice}`}
                  </StyledDiv>
                  </>
                  :''}
                </StyledList>
                
              )
            })
          }
      </Container>
    )
  }
}
