import React, { useState } from "react"
import styled from "styled-components"
import { styles } from "../../utils/Index"
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"

const Footer = () => {
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
        id: 3,
        url: "https://www.github.com/K-Kumar-01",
        icon: <FaGithub className="icon github-icon" />,
      },
    ],
  })
  return (
    <FooterWrapper>
      <div className="title">Eatery</div>
      <div className="icons">
        {state.icons.map(({ id, url, icon }) => {
          return (
            <a href={url} key={id} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          )
        })}
      </div>
      <p className="copyright">copyright &copy; 2017 eatery</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`

export default Footer
