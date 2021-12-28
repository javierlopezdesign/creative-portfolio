import styled from "styled-components";


export const StyledAbout = styled.div`
    min-height: 90vh;
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;

`;

export const StyledDescription = styled.div`
    padding-right: 5rem;
    flex: 1;
`;

export const StyledImg = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHide = styled.div`
    overflow: hidden;
`;
