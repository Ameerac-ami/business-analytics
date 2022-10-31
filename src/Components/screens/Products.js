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
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  width: 73%;
`;
