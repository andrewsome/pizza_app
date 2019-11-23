import React, { Component } from 'react'
import Header from '../../Header'
import styled from 'styled-components'
import Container from '../../../Layout/Container'
import Button from '../Button'
import { toppingData } from './toppingData'


const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;


export default class ToppingOptions extends Component {

	render() {

		return (
			<Container>
				<Header>Choose Your Topping</Header>
				<StyledDiv>
					{ toppingData.map(({id, src, title}) =>
						<Button key={id} src={src} title={title} handleToppingOrder={this.props.handleToppingOrder} />
					)}
				</StyledDiv>
			</Container>
		)
	}
}
