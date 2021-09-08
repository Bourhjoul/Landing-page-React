import styled from "styled-components"

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  justify-self: center;
  column-gap: 20px;
  padding: 13px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.button};
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  :hover {
    color: ${(props) =>
      props.color ? props.color : props.theme.colors.button};
    background: #fff;
    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.3);
  }
  :disabled {
    background-color: #2f2f2f;
    color: white;
    :hover {
    }
  }
`
