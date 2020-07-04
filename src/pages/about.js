import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils/Index"
import image from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <HomeHeader img={image}>
      <Banner title="About Us" subtitle="Information about us"></Banner>
    </HomeHeader>
  </Layout>
)

export default AboutPage
