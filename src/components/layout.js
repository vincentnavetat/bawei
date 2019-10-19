import React from "react"
import Header from "./header"
import Bio from "../components/bio"

class Layout extends React.Component {
  render() {
    const { title, headerLinks, children } = this.props

    return (
      <div
        style={{
          padding: "15px",
          maxWidth: "700px",
          marginLeft: `auto`,
          marginRight: `auto`,
          minHeight: `100vh`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <Header siteTitle={title} menuLinks={headerLinks}></Header>
          <main>{children}</main>
        </div>
        <footer
          style={{

          }}
        >
          <Bio />
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
