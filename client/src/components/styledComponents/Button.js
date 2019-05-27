import styled from 'styled-components'

export const Button = styled.button`
  background: #983EFF ;
  font-size: 13px;
  border-radius: 6px;
  color: white;
  border: 2px solid black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: .25s all ease-out;
  width: 10em;

  &:hover {
    background-color: #183440;
  }
`;

export const DelButton = styled(Button)`
  background: tomato;
`;


export default {
  Button,
  DelButton};