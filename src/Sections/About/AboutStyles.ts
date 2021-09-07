import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  padding-top: 14vw;
  z-index: 1;
`
export const SectionTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  padding-right: 20px;
`
export const Proposals = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 150px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`
