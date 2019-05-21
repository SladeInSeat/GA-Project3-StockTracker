import styled from 'styled-components'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    background: #57BBE6;
    background-size: cover;
    background-image: linear-gradient(180deg, #512CE8 0%, #B72CE8   100%);
    min-width: 100vw;
    min-height: 100vh;
    z-index: -999;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background: opacity(0.1);
    justify-content: flex-start;
    align-items: center;
    height: 90vh;
    width: 90vw;
    flex-basis: 0;
    flex-grow: 1;
`;

export const UserAccContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: opacity(0.1);
    justify-content: center;
    align-items: stretch;
    height: 40vh;
    width: 85vw;
    flex-basis: 0;
    flex-grow: 1;
    padding: 5px;
`;

export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: opacity(0.1);
    justify-content: space-around;
    align-items: flex-start;
    padding: 5px;
    width: 40vw;
    flex-grow: 1;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: opacity(0.1);
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    width: 80vw;
    flex-grow: 3;
`;


export default {
    Background,
    Column,
    DisplayContainer,
    SearchContainer,
    UserAccContainer
}