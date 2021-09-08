import React from "react"
import { FooterContainer } from "./FooterStyles"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      Made by :
      <a
        href="http://abourhjoul.me/"
        style={{ color: "#1F638A" }}
        target="_blank"
        rel="noreferrer"
      >
        Abdessamad Bourhjoul
      </a>
    </FooterContainer>
  )
}
