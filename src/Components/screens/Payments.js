import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

export default function Payments() {
  return (
    <Container>
      <HeaderContainer>
        <NavBar>
          <Nav />
        </NavBar>
        <BusinessLogo>
          <LogoImage
            src={
              require("../Assets/Images/logo.svg")
                .default
            }
            alt="image"
          />
        </BusinessLogo>
      </HeaderContainer>
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
  @media all and (max-width: 768px) {
    left: 26%;
    width: 74%;
  }
  @media all and (max-width: 480px) {
    left: 0;
    width: 94%;
    padding: 22px;
  }
`;
const HeaderContainer = styled.header`
  display: none;
  @media all and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;
const NavBar = styled.div``;
const BusinessLogo = styled.div`
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;
const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  width: 73%;
  @media all and (max-width: 768px) {
    width: 74%;
    font-size: 20px;
  }
`;
