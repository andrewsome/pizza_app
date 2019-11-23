import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
width:70rem;
margin:auto;
padding:0 1rem;
border:0.1rem solid black;
`;

const Container = ({
    children,
}) => (<StyledContainer>{children}</StyledContainer>
    );
export default Container
