import React from "react"
import { Logo, Nav, Navlink, Navlinks } from "./NavbarStyles"

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Nav>
      <Logo>FIKRALABS</Logo>
      <Navlinks>
        <Navlink href="#home" active>
          Accueil
        </Navlink>
        <Navlink href="#offer">Offre</Navlink>
        <Navlink href="#about">Apropos</Navlink>
        <Navlink href="#contact">Contact</Navlink>
      </Navlinks>
    </Nav>
  )
}
