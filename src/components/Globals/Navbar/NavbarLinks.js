import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils/Index"

const NavbarLinks = props => {
  const [state, setstate] = useState({
    links: [
      {
        id: 1,
        path: "/",
        name: "home",
      },
      {
        id: 2,
        path: "/about/",
        name: "about",
      },
      {
        id: 3,
        path: "/menu/",
        name: "menu",
      },
      {
        id: 4,
        path: "/contact/",
        name: "contact",
      },
    ],
  })
  return (
    <LinkWrapper open={props.navbarOpen}>
      {state.links.map(({ id, name, path }) => {
        return (
          <li key={id}>
            <Link to={path} className="nav-link">
              {name}
            </Link>
          </li>
        )
      })}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0")};
  overflow: hidden;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
  ${styles.transObject({ time: "0.8s" })}
`

export default NavbarLinks
