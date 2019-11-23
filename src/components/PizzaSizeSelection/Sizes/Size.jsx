import React, { Component } from 'react'
import styled from 'styled-components'
import Container from '../../../Layout/Container'
import Header from '../../Header'
import { PizzaSizes } from '../PizzaSizes'

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	margin: 1rem auto;
`;

const StyledImage = styled.img`
	border-radius: 50%;
	&:hover{
		cursor: pointer;
		transform: scale(1.05);
		box-shadow: .1rem .1rem 1rem .1rem red;
	}
`;

export default class Size extends Component {
	render() {
		return (
			<Container>
				<Header>Pizza Size Selection</Header>
				<StyledDiv>
					{Object.keys(PizzaSizes).map((key) => {
						const {size, src, alt, price} = PizzaSizes[key]
						return(
							<StyledImage key={key}
								width={size}
								height={size}
								src={src}
								alt={alt}
								onClick={(e) => this.props.handleChosenSize(e,key,price)}
							/>
						)
					})}
				</StyledDiv>
			</Container>
		)
	}
}
