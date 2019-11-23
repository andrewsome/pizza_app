import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width:5rem;
  font-size:4rem;
  line-height:4rem;
`;

export default class OrderModify extends Component {
  render() {
    const { numbers } = this.props;
    return (
      <div>
        {/* <div>{numbers >0?key:''}</div>
        <div>
          {numbers > 0 ?
          <div>
            <StyledButton onClick={(e)=>this.props.handleDecreace(e,key,numbers)}>-</StyledButton>
          {` ${numbers} `}
          <StyledButton onClick={(e)=>this.props.handleIncreace(e,key,numbers)}>+</StyledButton>
          </div>
          :''}
        </div> */}
      </div>
    )
  }
}
