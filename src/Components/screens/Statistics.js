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
                                <OrderImage src={require('../Assets/Images/Group 49.svg').default} alt="image" />
                            </StaticOrder>
                            <OrderStatus>Awaiting Delivery</OrderStatus>
                            <OrderCount>150K Orders</OrderCount>
                        </StaticItem>
                        <StaticItem>
                            <StaticOrder>
                                <OrderImage src={require('../Assets/Images/Group 49.svg').default} alt="image" />
                            </StaticOrder>
                            <OrderStatus>Awaiting Delivery</OrderStatus>
                            <OrderCount>150K Orders</OrderCount>
                        </StaticItem>
                    </StaticLeft>
                    <StaticRight>
                        <GraphContainer>
                            <SalesGraph>
                                <Graph src={require('../Assets/Images/Sales-graph.svg').default} alt="image" />
                            </SalesGraph>
                            {/* <SalesHeading>Sales last 6 months</SalesHeading>
                            <SalesCount>$14500.89K</SalesCount> */}
                        </GraphContainer>
                    </StaticRight>
                </StaticMiddleContainer> 
                <StaticBottomContainer>
                    <StaticBottomLeft>
                        <LeftHeading>Create Ads for Your Business</LeftHeading>
                        <AdImage>
                            <Image src={require('../Assets/Images/Group 52.svg').default} alt="image" />
                        </AdImage>
                    </StaticBottomLeft>
                    <StaticBottomRight>
                        <Heading>Secure Your Payments</Heading>
                        <PersonHead>
                            <Person src={require('../Assets/Images/businessman-svgrepo-2.svg').default} alt="image" />
                        </PersonHead>
                    </StaticBottomRight>
                </StaticBottomContainer>
            </MainContainer>
        </>
    )
}

export default Statistics
const MainContainer = styled.section`
    padding: 24px;
    width: 50%;
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
    padding: 41px 13px 0;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const StaticLeft = styled.ul`
    width: 46%;
`;
const StaticItem = styled.li`
    border-radius: 13px;
    height: 147px;
    margin: 26px 20px;

    &:first-child {
        background: #f5e7e4;
        
    }
    &:nth-child(2) {
        background: #e6f4ff;
    }
`;
const StaticOrder = styled.div`
    width: 46px;
`;
const OrderImage = styled.img`
    width: 100%;
    display: block;
`;
const OrderStatus = styled.h3`
    margin-left: 23px;
    margin-top: 20px;
    margin-bottom: 5px;
    font-weight: 600;
    font-family: "poppinsregular";
`;
const OrderCount = styled.h2`
    margin-left: 23px ;
    font-weight: 600;
    font-family: "poppinssemibold";
`;
const StaticRight = styled.div`
    width: 43%;
`;
const GraphContainer = styled.div`
`;
const SalesGraph = styled.div`
    width: 100%;
`;
const Graph = styled.img`
    width: 100%;
    display: block;
    border-radius: 13px;
`;
const StaticBottomContainer = styled.div`
    padding: 40px 31px;
    display: flex;
    justify-content: center;
`;
const StaticBottomLeft = styled.div`
    
`;
const LeftHeading = styled.h3`
    font-family: "poppinsregular";
    font-size: 18px;
    font-weight: 700;
    width: 70%;
    line-height: 1.5em;
`;
const AdImage = styled.div`
    margin: 27px 0 0 35px;
`;
const Image = styled.img``;
const StaticBottomRight = styled.div`
        display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Heading = styled.h3`
    font-family: "poppinsregular";
    font-size: 18px;
    font-weight: 700;
    width: 55%;
    line-height: 1.5em;
`;
const PersonHead = styled.div``;
const Person = styled.img``;
// const MainContainer = styled.section``;