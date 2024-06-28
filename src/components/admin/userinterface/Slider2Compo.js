

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import l1 from '../../../assests/l1.png'; // Assuming correct path
import l2 from '../../../assests/l2.png';
import l3 from '../../../assests/l3.png';
import l4 from '../../../assests/l4.png';
import l5 from '../../../assests/l5.png';
import l6 from '../../../assests/l6.png';
import l7 from '../../../assests/l7.png';
import l8 from '../../../assests/l8.png';
import { createRef } from "react";
import { Button } from "@mui/material";
import { ArrowBackIosIcon, ArrowForwardIosIcon } from "@mui/material";

export default function Slider2Compo(props) {
  var sld = createRef();

  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1,
    speed: 6000,
    slidesToShow: 8,
    slidesToScroll:1,
    autoplay: true,
    arrows: false,
    // fade: true,
    // cssEase: '' // Uncomment and set a valid CSS easing value if needed
  };

  const images = [l1, l2, l3, l4, l5, l6, l7, l8];

  const showSlide = () => {
    try {
      return images?.map((item) => {
        return (
          <div
            key={item} 
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <img src={item} style={{ width: '40%', height: '40%', borderRadius: 10 }} />
          </div>
        );
      });
    } catch (error) {
      console.error("Error loading image:", error);
    
    }
  };

  const handleBackward = () => {
    sld.current.slickPrev();
  };

  const handleForward = () => {
    sld.current.slickNext();
  };

  return (
    <div style={{ width: '100%', position: 'relative', marginTop: 10 ,background:'#F0F5FF'}}>
      <Slider ref={sld} {...settings}>
        {showSlide()}
      </Slider>
    </div>
  );
}
