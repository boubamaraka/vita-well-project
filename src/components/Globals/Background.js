import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { defaultBackground, imageVita } from '../layout.module.css'
export default function BackgroundSection({
    img, 
    title,
    children }) {
    return (
        <BackgroundImage className={defaultBackground} fluid={img}>
            <h1 className='title text-white text-uppercase text-center display-4 font-weight-bold'>
                {title}
            </h1>
            {children}
        </BackgroundImage>
            
        
    ) 
}
BackgroundSection.defaultProps = {
    title: 'Default Title',
    styleClass: 'default-background'
}
