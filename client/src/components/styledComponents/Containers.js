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
    overflow: auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background: opacity(0.1);
    justify-content: flex-start;
    align-items: center;
    height: 90vh;
    width: 90vw;
    flex-basis: auto;
    flex-grow: 1;
    overflow: auto;
    border: 3px green solid;
`;

export const UserAccContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: opacity(0.1);
    justify-content: center;
    align-items: stretch;
    height: 40vh;
    width: 85vw;
    flex-basis: auto;
    flex-grow: 1;
    padding: 5px;
    border: 2px blue solid;
`;

export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: opacity(0.1);
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px;
    width: 40vw;
    flex-grow: 1;
    flex-basis: auto;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: opacity(0.1);
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    width: 80vw;
    flex-grow: 1;
`;

export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 2px;
    flex-basis: 1;
    flex-grow: 1;
    overflow: auto;
`;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 0 1em 0;
    padding: 0;
    list-style: none;
    height: 80px;
    align-items: center;
`;

export const NavbarLi = styled.li`
    display: block;
    text-decoration: none;
    font-weight: bold;
    color: black;
`;



export default {
    Background,
    Column,
    DisplayContainer,
    SearchContainer,
    UserAccContainer,
    SearchResultsContainer,
    Navbar,
    NavbarLi
}