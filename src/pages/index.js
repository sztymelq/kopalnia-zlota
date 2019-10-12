import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image';
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

  return (
    <Layout>
      <SEO title="Home"/>
      <div className="container">

        elosiema to ejs ttekst
      </div>

      {/*<Img fluid={sztylet.file.childImageSharp.fluid}/>*/}

      <Image/>
    </Layout>);
};

export default IndexPage
