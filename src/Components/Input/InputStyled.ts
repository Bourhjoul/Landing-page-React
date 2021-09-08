import styled from "styled-components"

export const InputStyled = styled.input<{ error: boolean }>`
  border: 1px #fff solid;
  outline: none;
  padding: 15px;
  margin-top: 10px;
  color: #111;
  background-color: ${(props) => props.theme.colors.accent2};
  transition: all 0.4s ease-in-out;
  border-radius: 30px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px ${(props) => (props.error ? "#ef1a1a" : "#ffff")} solid;

  :focus {
    background: rgba(200, 200, 200, 0.1);
    border: 1px ${(props) => props.theme.colors.accent1} solid;
  }
`
export const FormMessage = styled.p<{ success?: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.success ? "#" : "#1F638A")};
`
