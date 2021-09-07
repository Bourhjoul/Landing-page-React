import styled from "styled-components"

export const ProposalCard = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`
export const NumberCircle = styled.div`
  background: rgb(254, 141, 0);
  background: linear-gradient(
    137deg,
    rgba(254, 141, 0, 0.5) 0%,
    rgba(254, 141, 0, 0) 100%
  );
  height: 80px;
  width: 80px;
  border-radius: 50%;
`
export const Number = styled.p`
  position: relative;
  top: 15px;
  right: 10px;
  font-size: 50px;
  font-weight: 500;
  color: #fe8d00;
`

export const ProposalText = styled.p`
  font-weight: 600;
  color: #10384e;
  max-width: 240px;
`
