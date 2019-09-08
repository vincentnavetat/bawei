import React from "react"
import Header from "./header"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, headerLinks, children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header siteTitle={title} menuLinks={headerLinks}></Header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
