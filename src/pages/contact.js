import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils/Index"
import image from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <HomeHeader img={image}>
      <Banner title="Contact Us" subtitle="Let's get in touch" />
    </HomeHeader>
  </Layout>
)

export default ContactPage
