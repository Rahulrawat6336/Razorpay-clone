import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { createRef } from "react";
import { Button } from "@mui/material";
import { useStyles } from "./PaymentComponentCss";
import p1 from '../../../assests/p1.jpg'
import s2 from '../../../assests/p2.webp'
import s3 from '../../../assests/p3.webp'
import s4 from '../../../assests/s4.webp'


export default function PaymentComponent1(props){

    var classes=useStyles()

  var sld =createRef()

 


    var settings = {
        dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    arrows: true,
    useStyle:{color:'blue'}
      }; 
  
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   cssEase:'linear'
  // };
      
      
//  var data=props?.images

const data = [ 
  { id: 1, picture:p1, des1: 'Payment Gateway', des2:"Offer a seamless payment experience on your website or app",  },
  { id: 2, picture:s2, des1: 'Payment Button', des2:"Effortlessly add a pay Now button without any coding required",},
  { id: 3, picture:s3, des1: 'Payment Link', des2:"Create and share links over email, text and social to accept payments instantly", },
  { id: 4, picture:s4, des1: 'Razorpay POS', des2:"Accept seamless in-store payments with india's best POS solution", },
  
]

var head =['Top Products', 'On Website/ App',' Plugins', 'On Social Media', 'In-store', 'International', 'With Smart Add-ons']

  const showhead=()=>{
    return head?.map((item)=>{
      return <div style={{display:'flex',marginLeft:25}}>{item}</div>
    })
  }
 

 const showSlide=()=>{
    return data?.map((item)=>{
        return<div className={classes.container}  >
            <div className={classes.card}>
         
          <img src={item.picture} style={{width:350,height:450, borderRadius:3,transform:'scale(1.1) rotate(-3deg)',transition:.5}} />
          <div className={classes.intro} > 
          <div className={classes.h1}>{item.des1}</div>
          <div className={classes.h2}>{item.des2}</div>
        
          <Button variant='contained' className={classes.p} >Sign Up Now</Button>
          </div>
          </div>
          
          </div>

    })
 }

 const handleBackward=()=>{
  sld.current.slickPrev()
 }
 const handleForward=()=>{
  sld.current.slickNext()
 }



 return(
 <div className={classes.root} >
  {/* <div style={{height:20,width:20,borderRadius:10,background:'red',marginLeft:10,marginTop:'55%',display:'flex',justifyContent:'center',alignItems:'center',opacity:'1'}}>
    <ArrowBackIosIcon style={{color:'blue'}} onClick={handleBackward}/>
  </div> */}
  <h1 style={{marginLeft:35}}>{props?.head}</h1>
  <div style={{display:'flex',flexDirection:'row',marginLeft:20}}>{showhead()}</div>
    <Slider ref={sld} {...settings}>
      
     {showSlide()}
  </Slider>



  {/* <div  style={{height:20,width:20,borderRadius:10,background:'red',display:'flex',top:'40%',right:'0.01%',justifyContent:'center',alignItems:'center',opacity:'1'}}>
    <ArrowForwardIosIcon style={{color:'blue'}} onClick={handleForward}/>
  </div> */}
  </div>
);
}