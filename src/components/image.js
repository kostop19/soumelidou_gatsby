import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "books.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 720, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        objectPosition="20%"
      />
    )}
  />
);
export default Image;
