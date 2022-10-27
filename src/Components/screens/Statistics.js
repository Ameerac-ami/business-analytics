import React from 'react'
import styled from 'styled-components'


function Statistics() {
    return (
        <>
            <MainContainer>
                <SearchContainer>
                    <SearchBar type="search"
                                placeholder="Search here"
                    />
                    <SearchIcon src={require('../Assets/Images/search.svg').default} alt="image" />
                </SearchContainer>
                <HeadingContainer>
                    <LeftMainHeading>Statistics</LeftMainHeading>
                    <RightHeading>
                        <MonthSelect name="months" id="">
                            <MonthOption value="6-month">6 Months</MonthOption>
                            <MonthOption value="5-month">5 Months</MonthOption>
                            <MonthOption value="4-months">4 Months</MonthOption>
                            <MonthOption value="3-months">3 Months</MonthOption>
                        </MonthSelect>
                    </RightHeading>
                </HeadingContainer>
                <StaticMiddleContainer>
                    <StaticLeft>
                        <StaticItem>
                            <StaticOrder>
                                <OrderImage src={require('../Assets/Images/Group 49.svg').default} alt="image"/>
                            </StaticOrder>
                            <OrderStatus>Awaiting Delivery</OrderStatus>
                            <OrderCount>150K Orders</OrderCount>
                        </StaticItem>
                        <StaticItem>
                            <StaticOrder>
                                <OrderImage/>
                            </StaticOrder>
                            <OrderStatus>Awaiting Delivery</OrderStatus>
                            <OrderCount>150K Orders</OrderCount>
                        </StaticItem>
                    </StaticLeft>
                    <StaticRight>
                        <GraphContainer>
                            <SalesHeading>Sales last 6 months</SalesHeading>
                            <SalesCount>$14500.89K</SalesCount>
                        </GraphContainer>
                    </StaticRight>
                    
                </StaticMiddleContainer> 
            </MainContainer>
        </>
    )
}

export default Statistics
const MainContainer = styled.section`
    padding: 24px;
    width: 43%;
`;
const SearchContainer = styled.form`
    position: relative;
`;
const SearchBar = styled.input`
    border: none;
    background: #d9d9d9;
    padding: 14px 11px;
    font-family: "poppinssemibold";
    width: 99%;
    border-radius: 9px;
`;
const SearchIcon = styled.img`
    position: absolute;
    width: 20px;
    display: inline-block;
    top: 8px;
    right: 7%;
`;
const HeadingContainer = styled.div`
    margin: 13px 13px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftMainHeading = styled.h2`
    font-family: 'poppinssemibold';

`;
const RightHeading = styled.form`
`;
const MonthSelect = styled.select`
    border: none;
    outline: none;
    font-family: "Poppinssemibold";
    font-size: 13px;
`;
const MonthOption = styled.option`
    margin: 10px;
    font-size: 13px;
    font-family: "Poppinsregular";
    text-align: center;
`;
const StaticMiddleContainer = styled.div`
    /* display: flex;
    flex-wrap: nowrap; */
    width: 100%;
`;
const StaticLeft = styled.ul`
`;
const StaticItem = styled.li`
    border-radius: 8px;
    width: 50%;
    height: 150px;
    margin-bottom: 20px;
    &:first-child {
        background: #f5e7e4;
        
    }
    &:nth-child(2) {
        background: #e6f4ff;
    }
`;
const StaticOrder = styled.div`
    width: 50px;
`;
const OrderImage = styled.img`
    width: 100%;
    display: block;
`;
const OrderStatus = styled.h2`
    margin-left: 20px ;
`;
const OrderCount = styled.h2``;
const StaticRight = styled.div``;
const GraphContainer = styled.div`
    background-image: url('../Assets/Images/Sales-graph.svg');
    background-size: 300px 100px;
    background-repeat: no-repeat;
`;
const SalesHeading = styled.h2``;
const SalesCount = styled.h2``;

// const MainContainer = styled.section``;

// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
