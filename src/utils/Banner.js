import React from "react"
import styled from "styled-components"
import { styles } from "./Index"

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h1 className="subtitle">
        <em>{subtitle}</em>
      </h1>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  text-align: center;
  .title,
  .subtitle {
    color: ${styles.colors.mainWhite};
  }
  .title {
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.5rem" })};
  }
  .subtitle {
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  margin-bottom: 3rem;
`

Banner.defaultProps = {
  title: "default title",
  subtitle: "default subtitle",
}

export default Banner
