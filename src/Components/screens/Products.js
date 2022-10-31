import React from "react";
import styled from "styled-components";

export default function Products() {
  return (
    <Container>
      <Title>
        Currently Unavailable...! Stay Tuned.....
      </Title>
    </Container>
  );
}
const Container = styled.section`
  position: absolute;
  top: 0;
  left: 22.5%;
  width: 47%;
  display: flex;
  align-items: center;
  height: 100vh;
  @media all and (max-width:768px) {
    left: 26%;
    width: 74%;
  }
`;
const Title = styled.h1`
  /* font-size: ; */
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  width: 73%;
  @media all and (max-width:768px) {
    width: 74%;
    font-size: 20px;
  }
`;
