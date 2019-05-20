import styled from 'styled-components'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    background: #57BBE6;
    background-size: cover;
    min-width: 100vw;
    min-height: 100vh;
    z-index: -999;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: orange;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid yellow 3px;
    height: 90vh;
    width: 90vw;
    flex-basis: 0;
`;
export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: green;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid black 3px;
    padding-top: 5px;
    width: 80vw;
`;


export default {
    Background,
    DisplayContainer
}