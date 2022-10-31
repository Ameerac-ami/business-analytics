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
`;
const Head = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 16px;
`;
const IconContainer = styled.div`
  width: 58%;
  margin: 0 41px;
`;
const Icon = styled.img`
  width: 100%;
  display: block;
`;
const NavBody = styled.div`
  display: flex;
  padding: 24px;
  height: 70%;
`;
const NavList = styled.ul``;
const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  /* cursor: pointer; */
  /* color: #938e8e;
    &:hover {
        color: #333988;
    } */
  &:last-child {
    margin-bottom: 0;
  }

  @media all and (max-width :1080px) {
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
  @media all and (max-width : 1080px) {
    font-size: 12px;
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
  margin: 281px auto 0 auto;

  @media all and (max-width: 1080px) {
    margin: 182px auto 0 auto;
  }
`;
const ImageContainer = styled.div`
  width: 75%;
  margin: 10px auto 0;
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
`;
const Image = styled.div`
  position: relative;
  width: 20px;
`;
const ArrowImage = styled.img`
  position: absolute;
  display: inline-block;
  width: 63%;
  top: -31px;
  left: 106px;
  transform: rotate(270deg);
`;
