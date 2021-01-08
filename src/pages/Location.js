import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5vw 5vw;
  text-align: center;
  justify-content: space-around;

  iframe {
    width: 100vw;
    height: 100vw;
    resize: both;
    overflow: auto;
  }

  @media (min-width: 475px) {
    iframe {
      width: 50vw;
      height: 30vw;
      resize: both;
      overflow: auto;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  width: 300px;
  height: 300px;
  justify-content: center;
`

const Text = styled.div`
  font-size: 32px;
  margin: 0 0 16px 0;
`

export default () => {
  return <StyledContainer id='時間地點'>
    <Desc>
      <Text>徐州路2號庭園會館</Text>
      <Text>2021-02-06</Text>
      <Text>11:30 入席</Text>
    </Desc>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8002279656944!2d121.51869485086172!3d25.04085278389043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a976b82a6343%3A0xebdefa61d17726a4!2z5b6Q5bee6LevMuiZn-W6reWckuacg-mkqA!5e0!3m2!1szh-TW!2stw!4v1610141929557!5m2!1szh-TW!2stw" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </StyledContainer>
}