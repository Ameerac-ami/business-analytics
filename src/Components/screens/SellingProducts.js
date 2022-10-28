import React from 'react'
import styled from 'styled-components'

function SellingProducts() {
    const Products = [
        {
            // id : 1,
            title : "dominoes Coffee Table Game",
            sales : " 50k Sales",
            price : "$30",
            image : require("../Assets/Images/Product-1.jpg")
        },
        {
            // id : 2,
            title : "photive Wireless Speakers",
            sales : " 44k Sales",
            price : "$19",
            image : require("../Assets/Images/Product-2.jpg")
        },
        {
            // id : 3,
            title : "urbanears Lotson Speaker",
            sales : " 42k Sales",
            price : "$79",
            image : require("../Assets/Images/Product-3.jpg")
        },
        {
            // id : 4,
            title : "Platton 2 HeadPhones",
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

                {/* <ListItems>
                    <ProductImage>
                        <Product src={require('../Assets/Images/Product-2.jpg')} alt="image"/>
                    </ProductImage>
                    <Details>
                        <ProductName></ProductName>
                        <Sales></Sales>
                    </Details>
                    <Price>$30</Price>
                </ListItems>

                <ListItems>
                    <ProductImage>
                        <Product src={require('../Assets/Images/Product-3.jpg')} alt="image"/>
                    </ProductImage>
                    <Details>
                        <ProductName></ProductName>
                        <Sales></Sales>
                    </Details>
                    <Price>$30</Price>
                </ListItems>

                <ListItems>
                    <ProductImage>
                        <Product src={require('../Assets/Images/Product-4.jpg')} alt="image"/>
                    </ProductImage>
                    <Details>
                        <ProductName></ProductName>
                        <Sales></Sales>
                    </Details>
                    <Price>$30</Price>
                </ListItems>

                <ListItems>
                    <ProductImage>
                        <Product src={require('../Assets/Images/Product-5.jpg')} alt="image"/>
                    </ProductImage>
                    <Details>
                        <ProductName></ProductName>
                        <Sales></Sales>
                    </Details>
                    <Price>$30</Price>
                </ListItems> */}

            </Orders>
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
`;
const ListItems = styled.li`
`;
const ProductImage = styled.div`
`;
const Product = styled.img`
`;
const Details = styled.div`
`;
const ProductName = styled.h4`
`;
const Sales = styled.small`
`;
const Price = styled.h4`
`;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;
// const SeeAll = styled.span`
// `;

