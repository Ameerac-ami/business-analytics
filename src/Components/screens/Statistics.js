import React from "react";
import styled from "styled-components";

function Statistics() {
  return (
    <>
      <MainContainer>
        <SearchContainer>
          <SearchBar
            type="search"
            placeholder="Search here"
          />
          <SearchIcon
            src={
              require("../Assets/Images/search.svg")
                .default
            }
            alt="image"
          />
        </SearchContainer>
        <HeadingContainer>
          <LeftMainHeading>
            Statistics
          </LeftMainHeading>
          <RightHeading>
            <MonthSelect name="months" id="">
              <MonthOption value="6-month">
                6 Months
              </MonthOption>
              <MonthOption value="5-month">
                5 Months
              </MonthOption>
              <MonthOption value="4-months">
                4 Months
              </MonthOption>
              <MonthOption value="3-months">
                3 Months
              </MonthOption>
            </MonthSelect>
          </RightHeading>
        </HeadingContainer>
        <StaticMiddleContainer>
          <StaticLeft>
            <StaticItem>
              <StaticOrder>
                <OrderImage
                  src={
                    require("../Assets/Images/Group 49.svg")
                      .default
                  }
                  alt="image"
                />
              </StaticOrder>
              <DeliveryStatic>
                <OrderStatus>
                  Awaiting Delivery
                </OrderStatus>
                <OrderCount>
                  150K Orders
                </OrderCount>
              </DeliveryStatic>
            </StaticItem>
            <StaticItem>
              <StaticOrder>
                <OrderImage
                  src={
                    require("../Assets/Images/Group 49.svg")
                      .default
                  }
                  alt="image"
                />
              </StaticOrder>
              <DeliveryStatic>
                <OrderStatus>
                  Awaiting Delivery
                </OrderStatus>
                <OrderCount>
                  150K Orders
                </OrderCount>
              </DeliveryStatic>
            </StaticItem>
          </StaticLeft>
          <StaticRight>
            <GraphContainer>
              <SalesGraph>
                <Graph
                  src={
                    require("../Assets/Images/Sales-graph.svg")
                      .default
                  }
                  alt="image"
                />
              </SalesGraph>
            </GraphContainer>
          </StaticRight>
        </StaticMiddleContainer>
        <StaticBottomContainer>
          <StaticBottomLeft>
            <LeftHeading>
              Create Ads for Your Business
            </LeftHeading>
            <AdImage>
              <Image
                src={
                  require("../Assets/Images/Group 52.svg")
                    .default
                }
                alt="image"
              />
            </AdImage>
          </StaticBottomLeft>
          <StaticBottomRight>
            <Heading>
              Secure Your Payments
            </Heading>
            <PersonHead>
              <Person
                src={
                  require("../Assets/Images/businessman-svgrepo-2.svg")
                    .default
                }
                alt="image"
              />
            </PersonHead>
          </StaticBottomRight>
        </StaticBottomContainer>
      </MainContainer>
    </>
  );
}

export default Statistics;
const MainContainer = styled.section`
  padding: 18px 14px;
  width: 44%;
  position: absolute;
  left: 23%;
  top: 3%;

  @media all and (max-width: 768px) {
    width: 74%;
    padding: 20px 0 0 0;
    left: 26%;
  }
`;
const SearchContainer = styled.form`
  position: relative;
`;
const SearchBar = styled.input`
  border: none;
  background: #d9d9d9;
  padding: 11px 17px;
  font-family: "poppinsregular";
  font-weight: 600;
  font-size: 0.8em;
  width: 92%;
  margin-left: 27px;
  border-radius: 9px;

  @media all and (max-width: 1080px) {
    width: 87%;
    margin-left: 30px;
  }
  @media all and (max-width: 768px) {
    padding: 9px 17px;
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  width: 18px;
  display: inline-block;
  top: 12px;
  right: 8%;
  @media all and (max-width: 768px) {
    right: 12%;
  }
`;
const HeadingContainer = styled.div`
  padding: 38px 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 1080px) {
    padding: 38px 25px 0;
  }
  @media all and (max-width: 768px) {
    padding-top: 22px;
  }
`;
const LeftMainHeading = styled.h2`
  font-family: "poppinssemibold";

  @media all and (max-width: 1080px) {
    font-size: 1.3em;
  }
`;
const RightHeading = styled.form``;
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
  justify-content: space-between;
  width: 97%;
  align-items: center;
  margin: 0 auto;
  @media all and (max-width:480px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
const StaticLeft = styled.ul`
  width: 51%;
  @media all and (max-width:480px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StaticItem = styled.li`
  border-radius: 13px;
  height: 139px;
  margin: 26px 0 26px 15px;
  position: relative;
  &:first-child {
    background: #f5e7e4;
  }
  &:nth-child(2) {
    background: #e6f4ff;
  }

  @media all and (max-width: 1080px) {
    height: 119px;
    margin: 14px 20px;
  }
  @media all and (max-width: 480px) {
    width: 45%;
    margin: 10px;
  }
`;
const DeliveryStatic = styled.div`
  position: absolute;
  top: 43px;
  left: 5px;
`;
const StaticOrder = styled.div`
  width: 46px;
  position: absolute;
  top: 12px;
  left: 23px;

  @media all and (max-width: 1080px) {
    width: 36px;
    top: 8px;
    left: 10px;
  }
  @media all and (max-width: 768px) {
    top: 10px;
    left: 28px;
  }
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

  @media all and (max-width: 1080px) {
    margin-top: 9px;
    margin-bottom: 0;
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`;
const OrderCount = styled.h2`
  margin-left: 23px;
  font-weight: 600;
  font-family: "poppinssemibold";

  @media all and (max-width: 1080px) {
    font-size: 19px;
  }
`;
const StaticRight = styled.div`
  width: 42%;

  @media all and (max-width:480px) {  
    width: 60%;
    margin: 0 auto;

  }
`;
const GraphContainer = styled.div``;
const SalesGraph = styled.div`
  width: 100%;

  @media all and (max-width: 768px) {
    width: 87%;
  }
`;
const Graph = styled.img`
  width: 100%;
  display: block;
  border-radius: 13px;
`;
const StaticBottomContainer = styled.div`
  padding: 30px 31px 0;
  display: flex;
  justify-content: center;

  @media all and (max-width: 768px) {
    padding-left: 49px;
    padding-top: 19px;
    padding-bottom: 10px;
  }
`;
const StaticBottomLeft = styled.div``;
const LeftHeading = styled.h3`
  font-family: "poppinsregular";
  font-size: 20px;
  font-weight: 700;
  width: 70%;
  line-height: 1.5em;

  @media all and (max-width: 1080px) {
    font-size: 17px;
    width: 79%;
  }
`;
const AdImage = styled.div`
  margin: 21px 0 0 30px;
  width: 37%;

  @media all and (max-width: 1080px) {
    width: 37%;
  }
  @media all and (max-width: 768px) {
    width: 33%;
  }
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
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

  @media all and (max-width: 1080px) {
    width: 70%;
  }
`;
const PersonHead = styled.div`
  width: 60%;

  @media all and (max-width: 1080px) {
    width: 56%;
  }
  @media all and (max-width: 768px) {
    width: 51%;
  }
`;
const Person = styled.img`
  width: 100%;
  display: block;
`;
