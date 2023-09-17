import React from 'react'
import {imageVita} from '../layout.module.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from '../../images/image-1.png'
import logo2 from '../../images/image-2.png'
import logo3 from '../../images/image-3.png'
import logo4 from '../../images/image-4.png'
import logo5 from '../../images/image-5.png'
const images = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
];
function Slider() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} className={imageVita}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Slider;
