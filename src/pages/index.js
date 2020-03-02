import React from "react"
import { Link } from "gatsby"
import  "./../styles/global.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import  FancyParagraph  from  "../components/fancy-paragraph"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    [Text]("google.com")
    # heading 1
    <h1>Hi people</h1>
    <p>Welcome to my SitePoint Demo Site!</p>
    <FancyParagraph  paragraphText="Styled with CSS Modules." />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
