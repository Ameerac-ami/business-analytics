import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Navbar() {
  const NavItems = [
    {
      title: "Summary",
      icon: require("../Assets/Images/Book.svg")
        .default,
      Link: "/summary",
    },
    {
      title: "Products",
      icon: require("../Assets/Images/slide.svg")
        .default,
      Link: "/products",
    },
    {
      title: "Hot Selling",
      icon: require("../Assets/Images/fire.svg")
        .default,
      //   Link: "/hotselling",
    },
    {
      title: "Manage Order",
      icon: require("../Assets/Images/oder.svg")
        .default,
      Link: "/manageorder",
    },
    {
      title: "Payments",
      icon: require("../Assets/Images/Wallet.svg")
        .default,
      Link: "/payments",
    },
    {
      title: "Settings",
      icon: require("../Assets/Images/Settings.svg")
        .default,
      Link: "/settings",
    },
  ];
  const renderNavItems = () => {
    return NavItems.map((items) => (
      <ListItems
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        <ListName to={items.Link}>
          {items.title}
        </ListName>
        <NavIconContainer>
          <NavIcon src={items.icon} alt="image" />
        </NavIconContainer>
      </ListItems>
    ));
  };
  return (
    <>
      <Helmet>
        <title>Business | Analytics |</title>
      </Helmet>
      <Maincontainer>
        <Head>
          <IconContainer>
            <Icon
              src={
                require("../Assets/Images/logo.svg")
                  .default
              }
              alt="image"
            />
          </IconContainer>
        </Head>
        <NavBody>
          <NavList>{renderNavItems()}</NavList>
        </NavBody>
        <BottomContainer>
          <ImageContainer>
            <Statistics
              src={
                require("../Assets/Images/Group 11.svg")
                  .default
              }
              alt="image"
            />
          </ImageContainer>
          <Content>
            Power up Your Business
          </Content>
          <GoButton>Go Pro! </GoButton>
          <Image>
            <ArrowImage
              src={
                require("../Assets/Images/Go.svg")
                  .default
              }
              alt="arrow"
            />
          </Image>
        </BottomContainer>
      </Maincontainer>
    </>
  );
}

export default Navbar;

const Maincontainer = styled.section`
  padding: 24px;
  width: 19%;
  border-right: 1px solid #d8d5d5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;

  @media all and (max-width: 768px) {
    padding: 22px 8px 0 8px;
    width: 24%;
  }
`;
const Head = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 16px;

  @media all and (max-width: 980px) {
    padding-top: 17px;
  }
`;
const IconContainer = styled.div`
  width: 58%;
  margin: 0 41px;

  @media all and (max-width: 768px) {
    width: 87%;
    margin: 0 auto;
  }
`;
const Icon = styled.img`
  width: 100%;
  display: block;
`;
const NavBody = styled.div`
  display: flex;
  padding: 24px;
  height: 70%;
  @media all and (max-width: 768px) {
    justify-content: center;
    padding: 20px 0 0 0;
  }
`;
const NavList = styled.ul`
  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  &:last-child {
    margin-bottom: 0;
  }

  @media all and (max-width: 1080px) {
    margin-bottom: 31px;
  }
`;
const ListName = styled(Link)`
  font-family: "poppinsregular";
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  color: #938e8e;
  font-weight: 600;
  &:hover {
    color: #333988;
  }
  @media all and (max-width: 1080px) {
    font-size: 12px;
  }
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`;
const NavIconContainer = styled.div`
  width: 26px;
  margin-left: 58px;
  &:last-child {
    margin-bottom: 0;
  }
  @media all and (max-width: 1080px) {
    width: 20px;
    margin-left: 39px;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const NavIcon = styled.img`
  display: block;
  width: 100%;
`;
const BottomContainer = styled.div`
  padding: 11px;
  background: #f1f1f3;
  width: 70%;
  height: 30vh;
  border-radius: 7px;
  margin: 152px auto 0 auto;

  @media all and (max-width: 1080px) {
    margin-top: 105px;
  }
  @media all and (max-width: 768px) {
    margin-top: 80px;
  }
  @media all and (max-width: 480px) {
    display:none;
  }

`;
const ImageContainer = styled.div`
  width: 75%;
  margin: 10px auto 0;

  @media all and (max-width: 1080px) {
    width: 69%;
  }
`;
const Statistics = styled.img`
  display: block;
  width: 100%;
`;
const Content = styled.p`
  font-family: "poppinsbold";
  color: #000;
  font-size: 12px;
  text-align: center;
  width: 62%;
  margin: 5px auto 0;

  @media all and (max-width: 1080px) {
    width: 67%;
  }
  @media all and (max-width: 768px) {
    width: 74%;
  }
`;
const GoButton = styled.div`
  background: #333988;
  color: #ffffff;
  font-size: 12px;
  font-family: "poppinssemibold";
  padding: 9px 27px;
  border-radius: 10px;
  margin: 6px auto;
  cursor: pointer;
  border-color: #333988;
  width: 46%;

  @media all and (max-width: 1080px) {
    padding: 7px 17px;
    border-radius: 7px;
  }
`;
const Image = styled.div`
  position: relative;
  width: 17px;

  @media all and (max-width: 1080px) {
    width: 14px;
  }
`;
const ArrowImage = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  top: -33px;
  left: 106px;
  transform: rotate(270deg);

  @media all and (max-width: 1080px) {
    top: -28px;
    left: 91px;
  }
  @media (max-width: 768px) {
    top: -29px;
    left: 88px;
  }
`;
