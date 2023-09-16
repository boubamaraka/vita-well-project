import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export const CarouselPageQuery = graphql`
  query {
    image1 : file(relativePath: {eq: "image-1.png"}) {
    id
    name
    childrenImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2 : file(relativePath: {eq: "image-2.png"}) {
    id
    name
    childrenImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3 : file(relativePath: {eq: "image-3.png"}) {
    id
    name
    childrenImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  image4 : file(relativePath: {eq: "image-4.png"}) {
    id
    name
    childrenImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  image5 : file(relativePath: {eq: "image-5.png"}) {
    id
    name
    childrenImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`
export default IndexPage
