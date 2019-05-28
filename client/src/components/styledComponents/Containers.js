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
    flex-wrap: wrap;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: opacity(0.1);
    justify-content: flex-start;
    align-items: center;
    min-height: 90vh;
    width: 90vw;
    flex-basis: auto;
    flex-grow: 1;
    border: 3px green solid;
`;

export const UserAccContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: opacity(0.1);
    justify-content: flex-end;
    align-items: base-line;
    flex-basis: auto;
    flex-grow: 4;
    min-height: 70px;
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
    flex-wrap: wrap;
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
    flex-wrap: wrap;
`;

export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 2px;
    flex-basis: 1;
    flex-grow: 1;
    flex-wrap: wrap;
`;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: opacity(0.1);
    width: 100vw;
    padding: 1em 0 1em 0;
    list-style: none;
    min-height: 10vh;
    align-items: center;
`;

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 0;
    flex-grow: 20;
`;

export const Li = styled.li`
    display: flex;
    list-style: none;
    color: black;
`;

export const Input = styled.input`
    font-size: 13px;
    border-radius: 6px;
    border: 2px solid black;
    margin: .5em 1em;
    padding: 0.25em 1em;
    width: 8em;
`;

export const StockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: .25 em;
    margin: .25em 1em;
    border: 4px solid #2432FF;
    color: black;
    width: 20vw;

`;

export const StockTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start
    align-items: center;
    background: #2432FF;
    color: white;
    min-height: 2vh;
    min-width: 19vw;
    padding: .5em;
`;

export const StockData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-itmes; flex-start;
    background: opacity(0.1);
    color: black;
    padding: 0em .5em;
    margin: .25em .5em;

`;



export default {
    Background,
    Column,
    DisplayContainer,
    SearchContainer,
    UserAccContainer,
    SearchResultsContainer,
    Navbar,
    Li,
    NavbarContainer,
    Input
}