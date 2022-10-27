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
            </MainContainer>
        </>
    )
}

export default Statistics
const MainContainer = styled.section`
    padding: 24px;
    width: 30%;
`;
const SearchContainer = styled.form`
    position: relative;
`;
const SearchBar = styled.input`
    border: none;
    background: #d9d9d9;
    padding: 11px 26px;
    width: 99%;
    border-radius: 4px;
`;
const SearchIcon = styled.img`
    position: absolute;
    width: 20px;
    display: inline-block;
    top: 8px;
    right: 12%;
`;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
// const MainContainer = styled.section``;
