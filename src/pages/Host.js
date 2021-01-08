import Jacky from '../images/jacky.jpg';
import Neo from '../images/neo.jpg';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5vw 0px;
  text-align: center;
`;

const Profile = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 60px;
`

const Photo = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  border-radius: 50%;
  margin: 30px auto;
`

const Title = styled.div`
  font-size: 24px;

  @media (min-width: 475px) {
    font-size: 32px;
  }
`

const Text = styled.div`
  font-size: 20px;

  @media (min-width: 475px) {
    font-size: 24px;
  }
`

export default () => {
  return <StyledContainer id='主辦單位'>
    <Profile>
      <Title>潘冠宇</Title>
      <Photo image={Jacky} />
      <Text>發現問題，找到原因，解決問題。</Text>
    </Profile>
    <Profile>
      <Title>郭乃瑜</Title>
      <Photo image={Neo} />
      <Text>Facebook 認證邊緣人</Text>
    </Profile>
  </StyledContainer>
}