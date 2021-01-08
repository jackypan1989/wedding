import Jacky from '../images/jacky.jpg';
import Neo from '../images/neo.jpg';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 5vw 0px;
  text-align: center;
`;

const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Photo = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  border-radius: 50%;
`

const Text = styled.div`
  font-size: 24px;
`

export default () => {
  return <StyledContainer id='主辦單位'>
    <Profile>
      <Photo image={Jacky} />
      <div>
        <Text>新郎 潘冠宇</Text>
        <Text>發現問題，找到原因，解決問題。</Text>
      </div>
    </Profile>
    <Profile>
      <Photo image={Neo} />
      <div>
        <Text>新娘 郭乃瑜</Text>
        <Text>Facebook 認證邊緣人</Text>
      </div>
    </Profile>
  </StyledContainer>
}