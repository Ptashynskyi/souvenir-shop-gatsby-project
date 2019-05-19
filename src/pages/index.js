import React from "react"
import { /*Link, */ graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/info"
import Product from "../components/Home/Product"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Info />
    <Product items={data.menu} />
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    menu: allContentfulSouvenirProduct {
      edges {
        node {
          id
          title
          price
          category
        }
      }
    }
  }
`
