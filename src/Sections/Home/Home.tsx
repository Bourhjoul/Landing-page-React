import React from "react"
import { Navbar } from "../../Components/Navbar/Navbar"
import {
  Wave,
  HomeContainer,
  Pathbackground,
  Svgbackground,
  Image,
  HomeSection,
  SectionTitle,
  Sectionparagraph,
  Shape,
  LampImage,
} from "./HomeStyles"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HomeSection>
        <Sectionparagraph>
          <SectionTitle>
            Nous vous aidons à trouver le bon locataire.{" "}
          </SectionTitle>
          <br />
          <p style={{ fontSize: "18px" }}>
            Notre objectif est de pouvoir proposer des services gratuits à vie
            ou à très faible coût pour le propriétaire après les 1 an de test.
          </p>
        </Sectionparagraph>
        <Image src="https://i.imgur.com/MK8QoZD.png" alt="chair" />
        <Shape></Shape>
        <LampImage src="https://i.imgur.com/tAP69hs.png" alt="lamp" />
      </HomeSection>
      <Wave>
        <Svgbackground
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <Pathbackground d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></Pathbackground>
        </Svgbackground>
      </Wave>
    </HomeContainer>
  )
}
