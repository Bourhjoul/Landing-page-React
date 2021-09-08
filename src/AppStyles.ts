import styled from "styled-components"

export const AppContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: auto;
  overflow: hidden;
`

export const BottomContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: rgb(150, 195, 220);
  background: linear-gradient(
    120deg,
    rgba(150, 195, 220, 0.3) 0%,
    rgba(220, 240, 251, 1) 52%,
    rgba(182, 220, 241, 0.2) 100%
  );
  min-height: 900px;
`
export const WaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  border-bottom: 80px;
`
export const SvgbackgroundTop = styled.svg`
  position: relative;
  display: block;
  width: calc(134% + 1.3px);
  height: 150px;
  transform: rotateY(180deg);

  @media ${(props) => props.theme.breakpoints.md} {
    width: calc(182% + 1.3px);
    height: 161px;
  }
`
export const SvgbackgroundBottom = styled.svg`
  position: relative;
  display: block;
  width: calc(134% + 1.3px);
  height: 150px;
  transform: rotateY(180deg);
  @media ${(props) => props.theme.breakpoints.md} {
    width: calc(182% + 1.3px);
    height: 161px;
  }
`
export const Pathbackground = styled.path`
  fill: ${(props) => props.theme.colors.background1};
`
