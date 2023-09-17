import * as React from 'react'
import {container, imageVita} from './layout.module.css'
import Header from './header'
import Footer from './Globals/Footer'


const Layout = ({children }) => {
  return (
    <div>
      <nav>
        <Header></Header>
        {children}
        <Footer />
      </nav>
    </div>
  )
}

export default Layout
