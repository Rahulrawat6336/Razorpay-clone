import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { createRef } from "react";
import { Button } from "@mui/material";
import { useStyles } from "./PaymentComponentCss";
import s41 from '../../../assests/a1.jpg'
import s22 from '../../../assests/a2.webp'
import s33 from '../../../assests/a3.jpg'
import s44 from '../../../assests/a4.avif'


export default function PaymentComponent3(props){

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
  { id: 1, picture:s41, des1: 'Payroll for Startups', des2:"Master payroll and compliance with a solution built just for startups",  },
  { id: 2, picture:s22, des1: 'Payroll for CAs', des2:"Transform payroll and compliance for your clients with RazorpayX",},
  { id: 3, picture:s33, des1: 'Payroll for Enterprises', des2:"Get india's No,1 payroll software for enterprises with RazorpayX", },
  { id: 4, picture:s44, des1: 'Accounting Integration', des2:"Easy integrations with your accounting software", },
  
]
 

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
    <Slider ref={sld} {...settings}>
      
     {showSlide()}
  </Slider>



  {/* <div  style={{height:20,width:20,borderRadius:10,background:'red',display:'flex',top:'40%',right:'0.01%',justifyContent:'center',alignItems:'center',opacity:'1'}}>
    <ArrowForwardIosIcon style={{color:'blue'}} onClick={handleForward}/>
  </div> */}
  </div>
);
}