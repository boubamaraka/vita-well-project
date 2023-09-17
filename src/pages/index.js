import * as React from 'react'
import { graphql, usestaticquery } from "gatsby"
import Layout from '../components/layout'
import BackgroundSection from '../components/Globals/Background'
import Slider from '../components/Globals/Slider'

const IndexPage = (data) => {

  console.log(data)
  return (
    <Layout pageTitle="Home">
      <Slider />
      <BackgroundSection title="Vita Drink" img={data.data.img.childImageSharp.fluid}/>
    </Layout>
  )
}


export const query = graphql`
query {
  img: file(relativePath: {eq: "background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
       }
     }
   }
}
`

export default IndexPage
