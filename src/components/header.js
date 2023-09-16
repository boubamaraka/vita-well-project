import * as React from "react"
import { Link } from "gatsby"
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Header = ({ siteTitle }) => (
  <header className={container}>
    <ul className={navLinks}>
      <li  className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
      </li>
      <li  className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          About Us
        </Link>
      </li>
      <li  className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Functional drinks
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          News
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Contact us
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Vitamin Well Runners
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
