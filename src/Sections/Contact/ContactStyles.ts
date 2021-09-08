import styled from "styled-components"

export const ContactContainer = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 900px;
  min-height: 450px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 30px 0;
  row-gap: 40px;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.background1};
  box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.3);
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 95%;
    padding: 20px 10px;
  }
`
export const SectionTitle = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: 500;
`
export const FormContainer = styled.form`
  display: grid;
  width: 70%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  row-gap: 40px;
  column-gap: 10px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    align-items: unset;
    padding: 10px;
    flex-direction: column;
  }
`
