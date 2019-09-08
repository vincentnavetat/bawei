import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Publications extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const headerLinks = data.site.siteMetadata.menuLinks

    return (
      <Layout location={this.props.location} title={siteTitle} headerLinks={headerLinks}>
        <SEO title="Publications" />
        <article>
          This is the Publications page
        </article>
      </Layout>
    )
  }
}

export default Publications

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`
