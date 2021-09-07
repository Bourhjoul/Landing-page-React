import React from "react"
import {
  Number,
  NumberCircle,
  ProposalCard,
  ProposalText,
} from "./ProposalStyles"

interface propsalProps {
  Order: string
  Text: string
}

export const Proposal: React.FC<propsalProps> = ({ Order, Text }) => {
  return (
    <ProposalCard>
      <NumberCircle>
        <Number>{Order}</Number>
      </NumberCircle>
      <ProposalText>{Text}</ProposalText>
    </ProposalCard>
  )
}
