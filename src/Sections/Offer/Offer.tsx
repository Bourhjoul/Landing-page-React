import React from "react"
import {
  OfferContainer,
  OneImage,
  ParagraphContainer,
  SectionTitle,
} from "./OfferStyles"

interface OfferProps {}

export const Offer: React.FC<OfferProps> = () => {
  return (
    <OfferContainer id="offer">
      <ParagraphContainer>
        <SectionTitle>Nous offrons 1 an de test</SectionTitle>
        <br />
        <br />
        <p style={{ fontSize: "17px" }}>
          Nous pensons qu’il est important de trouver un locataire qui
          correspond au logement mais aussi au propriétaire.
          <br />
          <br />À travers des fiches de personnalités en plus de leurs
          situations financières, nous allons vous présenter les meilleurs
          candidats qui vont occuper votre logement, Tout ça gratuitement
          pendant 1 an.{" "}
        </p>
      </ParagraphContainer>
      <OneImage src="https://i.imgur.com/E5QkiFA.png" />
    </OfferContainer>
  )
}
