import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { createRef } from "react";
import { Button } from "@mui/material";
import { useStyles } from './PaymentComponentCss'
import s41 from '../../../assests/a1.jpg'
import s22 from '../../../assests/a2.webp'
import s33 from '../../../assests/a3.jpg'
import s44 from '../../../assests/a4.avif'


export default function DashSlider(props) {

  var classes = useStyles()

  var sld = createRef()




  var settings = {
    dots:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows: false,
    fade: true,
cssEase:'linear'
  }; 




  //  var data=props?.images

  var data = [
    { id: 1, picture: s41, des1: 'API & Bulk Payouts', des2: "Make multiple payouts with a single click from your dashboard", },
    { id: 2, picture: s22, des1: 'Source to Pay', des2: "Control and optimize vendor payments with an integrated payables solution", },
    { id: 3, picture: s33, des1: 'Payout Link', des2: "Share payout links for instant payments, no bank details needed", },
    { id: 4, picture: s44, des1: 'TaxPayments', des2: "Online tax payments in a single click", },

  ]

  var head =['Top Products', 'On Website/ App',' Plugins', 'On Social Media', 'In-store', 'International', 'With Smart Add-ons']

  const showhead=()=>{
    return head?.map((item)=>{
      return <div>{item}</div>
    })
  }


  const showSlide = () => {
    return data?.map((item) => {
      return <div className={classes.container1}  >
        <div className={classes.card1}>
        <div style={{position:'absolute',top:10,marginLeft:10,marginLeft:290,display:'flex',justifyContent:'center',alignItems:'center',opacity:'1'}}>
    <ArrowBackIosIcon style={{color:'white'}} onClick={handleBackward}/>
  </div>

          <img src={item.picture} style={{ width:550, height:300, borderRadius:20,  }} />
          <div  style={{position:'absolute',display:'flex',marginLeft:315,top:10,justifyContent:'center',alignItems:'center',opacity:'1'}}>
    <ArrowForwardIosIcon style={{color:'white'}} onClick={handleForward}/>
  </div>
          <div className={classes.intro1} >
            <div className={classes.h11}>{item.des1}</div>
            <div className={classes.h21}>{item.des2}</div>

            {/* <Button variant='contained' className={classes.p} >Sign Up Now</Button> */}
          </div>
        </div>

      </div>

    })
  }

  const handleBackward = () => {
    sld.current.slickPrev()
  }
  const handleForward = () => {
    sld.current.slickNext()
  }



  return (
    <div className={classes.root1} >
    
      <h1 style={{ marginLeft: 35 }}>{props?.head}</h1>
     
      <Slider ref={sld} {...settings}>

        {showSlide()}
      </Slider>



   
    </div>
  );
}