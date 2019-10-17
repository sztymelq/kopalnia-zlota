import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
//   const sztylet = useStaticQuery(graphql`
//     query {
//   file(relativePath: {eq: "sztylet.jpg"}) {
//     id
//     name
//     childImageSharp {
//       id
//       sizes {
//         base64
//         tracedSVG
//         aspectRatio
//         src
//         srcSet
//         srcWebp
//         srcSetWebp
//         sizes
//         originalImg
//         originalName
//         presentationWidth
//         presentationHeight
//       }
//     }
//   }
// }
//   `);
  const sztylet = useStaticQuery(graphql`
    query MyQuery {
  file(relativePath: {eq: "sztylet.jpg"}) {
    relativePath
    childImageSharp {
      id
      fluid {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
        presentationWidth
        presentationHeight
      }
    }
  }
}
  `);

  const values = [1,2,3,4,5,6,7,8,9,0].map((l) => {
    return (
      <div className="square">{l}</div>
    )
  });

  return (
    <Layout>
      <SEO title="Home"/>
      <div className="container">
        {values}
      </div>

      {/*<Img fluid={sztylet.file.childImageSharp.fluid}/>*/}

    </Layout>);
};

export default IndexPage
