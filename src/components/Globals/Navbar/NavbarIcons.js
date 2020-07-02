import React, { useState } from "react"
import styled from "styled-components"
import { styles } from "../../../utils/Index"
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"

const NavbarIcons = () => {
  const [state, setstate] = useState({
    icons: [
      {
        id: 1,
        url: "https://www.facebook.com/profile.php?id=100004630659927",
        icon: <FaFacebook className="icon facebook-icon" />,
      },
      {
        id: 2,
        url: "https://www.instagram.com/kushal_kumar01",
        icon: <FaInstagram className="icon instagram-icon" />,
      },
      {
        id: 1,
        url: "https://www.github.com/K-Kumar-01",
        icon: <FaGithub className="icon github-icon" />,
      },
    ],
  })
  return (
    <IconWrapper>
      {state.icons.map(({ id, url, icon }) => {
        return (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        )
      })}
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      color: ${styles.colors.mainYellow};
    }
    ${styles.transFunction(undefined, "0.3s", undefined)};
  }
  .facebook-icon {
    color: #3b579d;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .github-icon {
    color: ${styles.colors.mainBlack};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
