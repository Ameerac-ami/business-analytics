import React from 'react'
import styled from 'styled-components'

export default function Settings() {
  return (
    <Container>
        <Title>We are working on our new site...! Stay Tuned.....</Title>
    </Container>
  )
}
const Container =styled.section`
    height: 100vh;
    background: #000;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
`;