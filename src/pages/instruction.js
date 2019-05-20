import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/info"
const Insruction = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Info />
  </Layout>
)

export default Insruction
