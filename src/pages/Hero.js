import HeroImage from '../images/hero.jpg';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 5vw 0px;
  text-align: center;
  width: 100vw;
  height: 150vw;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: 50% 30%;  

  @media (min-width: 475px) {
    height: 60vw;
  }
`;

export default () => {
  return <StyledContainer id='關於我們'>
  </StyledContainer>
}