import PropTypes from "prop-types"
import React from "react"
import "./header.scss";
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/">Pakiety</Link>
    <Link to="/">Cennik</Link>
    <Link to="/">Kontakt</Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
