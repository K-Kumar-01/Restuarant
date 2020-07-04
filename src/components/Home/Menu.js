import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import { Section, SectionButton, Title } from "../../utils/Index"
import styled from "styled-components"
import { Link } from "gatsby"

const getItems = graphql`
  query {
    items: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(getItems)
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        {data.items.edges.map(({ node }) => {
          return <Product key={node.id} product={node} />
        })}
      </ProductList>
      <Link to="/menu" style={{ textDecoration: "none" }}>
        <SectionButton style={{ margin: "2rem auto" }}>Menu</SectionButton>
      </Link>
    </Section>
  )
}

const ProductList = styled.div`
  display: grid;
  margin: 3rem auto;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify_content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
