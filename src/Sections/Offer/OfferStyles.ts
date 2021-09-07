import styled from "styled-components"

export const OfferContainer = styled.section`
  margin-top: 50px;
  display: flex;
  padding: 10px 7vw;
  align-items: center;
  min-height: 300px;
`

export const SectionTitle = styled.p`
  font-size: 4.5rem;
  font-weight: 500;
  justify-self: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    text-align: left;
    font-weight: 600;
  }
`
export const ParagraphContainer = styled.div`
  flex: 1.5;
`

export const OneImage = styled.img`
  height: 400px;
  flex: 1.5;
  object-fit: contain;
`
