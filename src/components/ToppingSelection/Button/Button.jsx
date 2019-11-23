import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	width: 24%;
  margin: 0.2rem .2rem;
  &:hover{
	box-shadow: .1rem .1rem 1rem .1rem red;
	cursor: pointer;
}
`;

const StyledImg = styled.img`
	width:30%;
	height:3rem;
	background:grey;
	pointer-events: none;
`;

const ButtonTitle = styled.div`
	width: 70%;
	text-align: center;
  font-size:2rem;
	pointer-events: none;  
`;

export default class Button extends Component {
  render() {
	const { src, title } = this.props;
    return (
					<StyledButton onClick={(e) => this.props.handleToppingOrder(e, title)}>
						<StyledImg src={src} alt={title} />
						<ButtonTitle>{title}</ButtonTitle>
					</StyledButton>
    )
  }
}
