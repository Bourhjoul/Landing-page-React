import React from "react"
import { Proposal } from "../../Components/proposal/Proposal"
import { AboutContainer, Proposals, SectionTitle } from "./AboutStyles"

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>
        Ce que nous vous <br /> proposons
      </SectionTitle>
      <Proposals>
        <Proposal Order="01" Text="Service gratuit et sans engagement" />
        <Proposal Order="02" Text="Recherche du locataire" />
        <Proposal
          Order="03"
          Text="Relation entre le locataire et le propriétaire"
        />
        <Proposal Order="04" Text="Proposition de bail en ligne rapidement" />
      </Proposals>
    </AboutContainer>
  )
}
