import React, {useState , useEffect} from 'react'
import styled from 'styled-components'
import { Helmet } from "react-helmet";


function Navbar() {
  return (
    <>
        <Helmet>
            <title>Business | Analytics |</title>
        </Helmet>
        <Maincontainer>
           <Head>
                <IconContainer>
                    <Icon src={require('../Assets/Images/logo.svg').default} alt="image" />
                </IconContainer>
           </Head>
           <NavBody>
                <NavList>
                    <ListItems>
                        <ListName>Summary</ListName>
                        <NavIconContainer>
                            <NavIcon src={require('../Assets/Images/Book.svg').default} alt="image" />
                        </NavIconContainer>
                    </ListItems>
                    <ListItems>
                        <ListName>Products</ListName>
                        <NavIconContainer>
                            <NavIcon src={require('../Assets/Images/slide.svg').default} alt="image" />
                        </NavIconContainer>
                    </ListItems>
                    <ListItems>
                        <ListName>Hot Selling</ListName>
                        <NavIconContainer>
                            <NavIcon src={require('../Assets/Images/fire.svg').default} alt="image" />
                        </NavIconContainer>
                    </ListItems>
                    <ListItems>
                        <ListName>Manage Order</ListName>
                        <NavIconContainer>
                            <NavIcon src={require('../Assets/Images/oder.svg').default} alt="image" />
                        </NavIconContainer>
                    </ListItems>
                    <ListItems>
                        <ListName>Payments</ListName>
                        <NavIconContainer>
                            <NavIcon src={require('../Assets/Images/Wallet.svg').default} alt="image" />
                        </NavIconContainer>
                    </ListItems>
                    <ListItems>
                        <ListName>Settings</ListName>
                        <NavIconContainer>
                            <NavIcon src={require('../Assets/Images/Settings.svg').default} alt="image" />
                        </NavIconContainer>
                    </ListItems>
                </NavList>
           </NavBody>
           <BottomContainer>
                <ImageContainer>
                    <Statistics src={require('../Assets/Images/Group 11.svg').default} alt="image" />
                </ImageContainer>
                <Content>Power up Your Business</Content>
                <GoButton>Go Pro ! </GoButton>
                <Image>
                    <ArrowImage src={require("../Assets/Images/Arrow.svg").default} alt="arrow" />
                </Image>
           </BottomContainer>
        </Maincontainer>
    </>
  )
}

export default Navbar

const Maincontainer = styled.section `
    padding: 24px;
    width: 20%;
    border-right: 1px solid #d8d5d5;
`;
const Head = styled.header `
    display: flex;
    justify-content: flex-start;
`;
const IconContainer = styled.div `
    width: 38%;
    margin: 0 41px;
`;
const Icon = styled.img `
    width: 100%;
    display: block;
`;
const NavBody = styled.div `
    display: flex;
`;
const NavList = styled.ul `
`;
const ListItems = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #938e8e;
    &:hover {
        color: #333988;
    }
    &:last-child  {
        margin-bottom: 0;
    }
`;
const ListName = styled.h5 `
    font-family: "poppinssemibold";
    /* color: #938e8e; */
`;
const NavIconContainer = styled.div `
    width: 20px;
    margin-left: 71px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const NavIcon = styled.img `
    display: block;
    width: 100%;
`;
const BottomContainer = styled.div `
    padding: 11px;
    background: #f1f1f3;
    width: 60%;
    height: 56vh;
    border-radius: 7px;
    margin: 0 auto;
`;
const ImageContainer = styled.div `
    width: 69%;
    margin: 10px auto 0;
`;
const Statistics = styled.img `
    display: block;
    width: 100%;
`;
const Content = styled.p `
    font-family: "poppinsbold";
    color: #000;
    font-size: 13px;
    width: 62%;
    margin: 5px auto 0;
`;
const GoButton = styled.div `
    background: #333988;
    color: #ffffff;
    font-size: 14px;
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
    display: block;
    width: 100%;
    top: 10px;
    left: 10px;
`;
