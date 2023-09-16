import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}
// export const heroQuery = graphql`
//   query heroImages {
//     image1 : file(relativePath: {eq: "image-1.png"}) {
//     id
//     name
//     childrenImageSharp{
//       fluid{
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   image2 : file(relativePath: {eq: "image-2.png"}) {
//     id
//     name
//     childrenImageSharp{
//       fluid{
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   image3 : file(relativePath: {eq: "image-3.png"}) {
//     id
//     name
//     childrenImageSharp{
//       fluid{
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   image4 : file(relativePath: {eq: "image-4.png"}) {
//     id
//     name
//     childrenImageSharp{
//       fluid{
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   image5 : file(relativePath: {eq: "image-5.png"}) {
//     id
//     name
//     childrenImageSharp{
//       fluid{
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   }
// `
const CarouselPage = () => {
    const data = useStaticQuery(graphql`
    query {
        image1: file(relativePath: {eq: "image-1.png"}) {
            id
            childrenImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
        }
        image2 : file(relativePath: {eq: "image-2.png"}) {
            id
            childrenImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
        }
        image3 : file(relativePath: {eq: "image-3.png"}) {
            id
            childrenImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
        }
        image4 : file(relativePath: {eq: "image-4.png"}) {
            id
            childrenImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
        }
        image5 : file(relativePath: {eq: "image-5.png"}) {
            id
            childrenImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
        }
    }
  `)
  // console.log(data.image1.childImageSharp)
  return (
    <Slider {...settings} className="overflow-hidden">
      <Img fluid={data.image1.childrenImageSharp.fluid} />
      <Img fluid={data.image2.childrenImageSharp.fluid} />
      <Img fluid={data.image3.childrenImageSharp.fluid} />
      <Img fluid={data.image4.childrenImageSharp.fluid} />
      <Img fluid={data.image5.childrenImageSharp.fluid} />
    </Slider>
  )
}



export default CarouselPage
