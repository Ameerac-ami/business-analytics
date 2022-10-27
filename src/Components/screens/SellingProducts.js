import React from 'react'
import styled from 'styled-components'


function SellingProducts() {
  return (
    <>
        <MainContainer>
            <Head>
                <Left>
                    <Icons src={require('../Assets/Images/bell.svg').default} alt="image" />
                    <Icons src={require('../Assets/Images/chat.svg').default} alt="image" />
                </Left>
                <Right>
                    <PersonIcon src={require('../Assets/Images/Group 38.jpg')} alt="image" />
                    <ArrowIcon src={require('../Assets/Images/Arrow.svg').default} alt="image" />
                </Right>
            </Head>
        </MainContainer>
    </>
  )
}

export default SellingProducts
const MainContainer = styled.section`
    background: #f1f1f3;
    width: 35%;
`;
const Head = styled.header`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div``;
const Icons = styled.img``;
const Right = styled.div``;
const PersonIcon = styled.img`
    width: 41px;
    border-radius: 10px;
`;
const ArrowIcon = styled.img``;