import React, {useState , useEffect} from 'react'
import styled from 'styled-components'
import { Helmet } from "react-helmet";


function Navbar() {
  return (
    <>
        <h2>Nice to meet you</h2>
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
                <LeftSection>
                    <NavList>
                        <ListItems>Summary</ListItems>
                        <ListItems>Products</ListItems>
                        <ListItems>Hot Selling</ListItems>
                        <ListItems>Manage Order</ListItems>
                        <ListItems>Payments</ListItems>
                        <ListItems>Settings</ListItems>
                    </NavList>
                </LeftSection>
                <RightSection>
                    <NavIconSection>
                        <ListItems>
                            <NavIcon/>
                        </ListItems>
                    </NavIconSection>
                </RightSection>
           </NavBody>
        </Maincontainer>
    </>
  )
}

export default Navbar

const Maincontainer = styled.section `

`;
const Head = styled.header `

`;
const IconContainer = styled.div `

`;
const Icon = styled.img `

`;
const NavBody = styled.div `

`;
const LeftSection = styled.div `

`;
const NavList = styled.ul `

`;
const ListItems = styled.li `
    text-align: justify;
    margin-bottom: 25px;
    font-size: 12px;
`;
const RightSection = styled.div `

`;
const NavIconSection = styled.ul `

`;
const NavIcon = styled.img `

`;
// const Maincontainer = styled.section `

// `;