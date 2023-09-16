import * as React from 'react'
import {container, imageVita} from './layout.module.css'
import Header from './header'
import image1 from '../images/image-1.png'
import CarouselPage from './Hero'
import SimpleSlider from './Slicker'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <Header></Header>
      </nav>
      {/* <SimpleSlider />
      <CarouselPage />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main> */}
      
      <img src={image1} alt="image1" className={imageVita}/>
    </div>
  )
}

export default Layout
