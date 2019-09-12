import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from '../components/lightbox'

class Gallery extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const headerLinks = data.site.siteMetadata.menuLinks

    return (
      <Layout location={this.props.location} title={siteTitle} headerLinks={headerLinks}>
        <SEO title="Gallery" />
        <article>
          <Lightbox images={data.allFile.edges} />
        </article>
      </Layout>
    )
  }
}

export default Gallery

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
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "photos"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
