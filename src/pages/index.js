import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"
import Info from "../components/Home/info"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Info />
  </Layout>
)

export default IndexPage
