import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils/Index"
import image from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <HomeHeader img={image}>
      <Banner title="Our menu" subtitle="Let's dig in" />
    </HomeHeader>
  </Layout>
)

export default MenuPage
