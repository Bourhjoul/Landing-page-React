import styled from "styled-components"

export const HomeContainer = styled.section`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: rgb(182, 220, 241);
  background: linear-gradient(
    225deg,
    rgba(182, 220, 241, 1) 0%,
    rgba(220, 240, 251, 1) 100%
  );
  min-height: 500px;
  padding: 10px 7vw;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 10px 2vw;
  }
`

export const HomeSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  column-gap: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    row-gap: 20px;
  }
`
export const SectionTitle = styled.p`
  font-size: 4.5rem;
  font-weight: 600;
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
export const Sectionparagraph = styled.div`
  flex: 2;
`
export const Image = styled.img`
  height: 500px;
  z-index: 1;
  flex: 2;
  object-fit: contain;
  @media ${(props) => props.theme.breakpoints.md} {
    flex: 1;
    height: 50vw;
    width: 300px;
    object-fit: contain;
  }
`
export const LampImage = styled.img`
  height: 250px;
  object-fit: contain;
  position: absolute;

  right: 23vw;
  top: 250px;
  z-index: 2;
  @media ${(props) => props.theme.breakpoints.lg} {
    top: 200px;
    height: 200px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    right: 15vw;
    top: 180px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    right: 10vw;
    top: 400px;
  }
`

export const Shape = styled.div`
  width: 80px;
  position: absolute;
  top: 50px;
  right: 8vw;
  height: 110px;
  border-radius: 45% 0 45% 45%;
  background-color: #5ea8d1;
  @media ${(props) => props.theme.breakpoints.md} {
    position: static;
    display: none;
  }
`

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`

export const Svgbackground = styled.svg`
  position: relative;
  display: block;
  width: calc(122% + 1.3px);
  height: 161px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: calc(182% + 1.3px);
    height: 161px;
  }
`
export const Pathbackground = styled.path`
  fill: ${(props) => props.theme.colors.background1};
`
