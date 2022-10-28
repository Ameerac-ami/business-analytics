import React from 'react'
import styled from 'styled-components'

function SellingProducts() {
    const Products = [
        {
            // id : 1,
            title : "Dominoes Coffee Table Game",
            sales : " 50k Sales",
            price : "$30",
            image : require("../Assets/Images/Product-1.jpg")
        },
        {
            // id : 2,
            title : "Photive Wireless Speakers",
            sales : " 44k Sales",
            price : "$19",
            image : require("../Assets/Images/Product-2.jpg")
        },
        {
            // id : 3,
            title : "Urbanears Lotson Speaker",
            sales : " 42k Sales",
            price : "$79",
            image : require("../Assets/Images/Product-3.jpg")
        },
        {
            // id : 4,
            title : "Plattton 2 HeadPhones",
            sales : " 38k Sales",
            price : "$35",
            image : require("../Assets/Images/Product-4.jpg")
        },
        {
            // id : 4,
            title : "Solar Hand Crank Radio",
            sales : " 30k Sales",
            price : "$28",
            image : require("../Assets/Images/Product-5.jpg")
        },
    ];
    const renderProducts = () => {
        return Products.map( (product) =>( 
            <ListItems>
                <ProductImage>
                    <Product src= {product.image}/>
                </ProductImage>
                <Details>
                    <ProductName>{product.title}</ProductName>
                    <Sales>{product.sales}</Sales>
                </Details>
                <Price>{product.price}</Price>
            </ListItems>
        ))
    };
  return (
    <>
        <MainContainer>
            <Head>
                <Left>
                    <Icons src={require('../Assets/Images/bell.svg').default} alt="image" />
                    <Icons src={require('../Assets/Images/chat.svg').default} alt="image" />
                </Left>
                <Right>
                    <PersonImageContainer>
                        <PersonIcon src={require('../Assets/Images/Group 38.jpg')} alt="image" />
                    </PersonImageContainer>
                    <ArrowIconcontainer>
                        <ArrowIcon src={require('../Assets/Images/Arrow.svg').default} alt="image" />
                    </ArrowIconcontainer>
                </Right>
            </Head>
            <SubHead>
                <LeftHeading>Hot Selling Products</LeftHeading>
                <SeeAll>See All</SeeAll>
            </SubHead>
            <Orders>
                {renderProducts()}
                {/* <ListItems>
                    <ProductImage>
                        <Product src={require('../Assets/Images/Product-1.jpg')} alt="image"/>
                    </ProductImage>
                    <Details>
                        <ProductName></ProductName>
                        <Sales></Sales>
                    </Details>
                    <Price>$30</Price>
                </ListItems> */}

            </Orders>
            <BottomContainer>
                <LeftContainer>
                    <HelpContainer>
                        <Help>What can We help you with</Help>
                    </HelpContainer>
                    <ChatContainer>
                        <Chat>Chat with us</Chat>
                        <SlideContainer>
                            <Slide src={require("../Assets/Images/Go-Blue.svg").default} alt="arrow" />
                        </SlideContainer>
                    </ChatContainer>
                </LeftContainer>
                <RightContainer>
                    <ChatImageContainer>
                        <ChatImage src={require('../Assets/Images/businessman-1.svg').default} />
                    </ChatImageContainer>
                </RightContainer>
            </BottomContainer>
        </MainContainer>
    </>
  )
}

export default SellingProducts
const MainContainer = styled.section`
    background: #f1f1f3;
    width: 32%;
    padding: 31px 10px;
`;
const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
`;
const Icons = styled.img`
    margin-right: 24px;
    display: inline-block;
    width: 18px;
    &:nth-child(2) {
        display: inline-block;
        width: 21px;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
`;
const PersonImageContainer = styled.div`
    width: 41px;
    margin-right: 9px;
`;
const PersonIcon = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    margin-right: 11px;
`;
const ArrowIconcontainer = styled.div`
    width: 17px;
`;
const ArrowIcon = styled.img`
    display: block;
    width: 100%;
`;
const SubHead = styled.div`
    padding: 30px 19px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftHeading = styled.h3`
    font-family: "poppinsregular";
`;
const SeeAll = styled.span`
    font-family: "poppinsregular";
    font-size: 11px;
    font-weight: 600;
`;
const Orders = styled.ul`
    padding: 20px 14px;

`;
const ListItems = styled.li`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 40px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const ProductImage = styled.div`
    width: 20%;
`;
const Product = styled.img`
    display: block;
    width: 100%;
    border-radius: 8px;
`;
const Details = styled.div`
    width: 64%;
    margin: 10px;

`;
const ProductName = styled.h4`
    font-family: 'poppinsregular';
    font-weight: 600;
    margin-bottom: 9px;
    font-size: 14px;
`;
const Sales = styled.small`
    font-family: 'poppinsregular';
    font-weight: 600;
    font-size: 11px;
`;
const Price = styled.h4`
    width: 10%;
    margin-top: 6px;
`;
const BottomContainer = styled.div`
    display: flex;
    padding: 43px 14px;
`;
const LeftContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    flex-wrap: wrap;
    width: 51%;
`;
const HelpContainer = styled.div`
    width: 100%;
`;
const Help = styled.h3`
    font-family: "poppinsregular";
    line-height: 1.5em;
`;
const ChatContainer = styled.div`
    display: flex;
    /* justify-content: center; */
`;
const Chat = styled.h4`
    font-family: "poppinsregular";
    color: #3c418d;
`;
const SlideContainer = styled.div`
    width: 18px;
    margin-left: 10px;
`;
const Slide = styled.img`
    width: 100%;
    display: block;
    transform: rotate(270deg);
`;
const RightContainer = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column-reverse;
`;
const ChatImageContainer = styled.div`
    width: 79%;
    margin-top: 41px;
`;
const ChatImage = styled.img`
    width: 100%;
    display: block;
`;

