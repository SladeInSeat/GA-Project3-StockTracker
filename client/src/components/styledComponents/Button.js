import styled from 'styled-components'

export const Button = styled.button`
  background: #4DA6CC;
  font-size: 13px;
  border-radius: 6px;
  color: white;
  border: 2px solid black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: .25s all ease-out;

  &:hover {
    background-color: #183440;
  }
`;



export default Button;