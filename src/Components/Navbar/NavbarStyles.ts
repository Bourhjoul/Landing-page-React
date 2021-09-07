import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  max-width: 1380px;
  width: 100%;
  height: 70px;
  align-items: center;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
    row-gap: 20px;
  }
`

export const Navlinks = styled.div`
  display: flex;
  justify-self: end;
  flex: 2;
  @media ${(props) => props.theme.breakpoints.md} {
    flex: 1;
    width: 100%;
  }
`

export const Navlink = styled.a<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1;
  color: #111;
  width: min-content;
  font-weight: 600;
  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 25px;
    width: ${(props) => (props.active ? "50%" : "0")};
    height: 2px;
    background: #000000;
    transition: width 0.3s;
  }
  :hover {
    ::before {
      width: 50%;
    }
  }
`
export const Logo = styled.div`
  flex: 3;
  font-weight: 600;
  font-size: larger;
  @media ${(props) => props.theme.breakpoints.md} {
    flex: 1;
  }
`
