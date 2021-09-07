import styled from "styled-components"

export const HomeContainer = styled.section`
  position: relative;
  display: flex;
  background: rgb(182, 220, 241);
  background: linear-gradient(
    225deg,
    rgba(182, 220, 241, 1) 0%,
    rgba(220, 240, 251, 1) 100%
  );
  min-height: 400px;

  /* padding: 10px 15vw; */
`

export const Animation = styled.div`
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
  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(182% + 1.3px);
    height: 161px;
  }
`
export const Pathbackground = styled.path`
  fill: ${(props) => props.theme.colors.background1};
`
