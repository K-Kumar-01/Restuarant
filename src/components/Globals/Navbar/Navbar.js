import React, { useState } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"

const Navbar = () => {
  const [state, setstate] = useState(false)
  const handleNavbar = () => {
    console.log("clicked")
    setstate(prevState => !prevState)
  }
  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={state} />
      <NavbarIcons />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
