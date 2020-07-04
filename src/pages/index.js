import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils/Index"
import image from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/Home/QuickInfo"
import Gallery from "../components/Home/Gallery"
import Menu from "../components/Home/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={image} home="true">
      <Banner
        title="Eatery"
        subtitle="55-A main street - Shivaji Road Mumbai, IN"
      >
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery/>
    <Menu/>
  </Layout>
)

export default IndexPage
