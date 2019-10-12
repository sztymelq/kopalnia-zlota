import PropTypes from "prop-types"
import React from "react"
import { graphql, Link } from 'gatsby';
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Pakiety</Link>
      <Link to="/">Cennik</Link>
      <Link to="/">Kontakt</Link>
    </div>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const elo = graphql`query HeaderQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt
      }
    }
  }
}
`
