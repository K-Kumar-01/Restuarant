import React from "react"
import styled from "styled-components"

const HomeHeader = ({ img, children, home }) => {
  return (
    <IndexHeader home={home} img={img}>
      {children}
    </IndexHeader>
  )
}

const IndexHeader = styled.header`
  min-height: ${props => (props.home ? "calc(100vh - 44px)" : "calc(60vh)")};
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { HomeHeader }
