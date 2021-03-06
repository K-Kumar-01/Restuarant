import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.svg"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
import { styles } from "../../../utils/Index"

const NavbarHeader = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="Rob's Eatery" />
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={handleNavbar}
      ></FaAlignRight>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1 rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

export default NavbarHeader
