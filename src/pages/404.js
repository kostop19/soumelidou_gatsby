import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="404" keywords={[`gatsby`, `application`, `react`]} />
    <h1>You are in a wrong page</h1>
  
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage