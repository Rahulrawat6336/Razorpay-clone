// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import s1 from '../../../assests/s1.png'
// import s2 from '../../../assests/s2.png'
// import s3 from '../../../assests/s3.png'
// import s4 from '../../../assests/s4.png'
// import { createRef } from "react";
// import { Button } from "@mui/material";

// export default function SliderComponent(props){

//   var sld =createRef()

 


//     var settings = {
//         dots:true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay:true,
//         arrows: false,
//         fade: true,
//   cssEase:'linear'
//       }; 
  
//   // var settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   cssEase:'linear'
//   // };
      
      
 
 
//  const images = [
//   { id: 1, picture:s1, des1: 'Advanced Payment Solutions', des2:"for India's finest disruptors", des3: '100+ Payment Methods | Easy Integration | Powerful Dashboard' },
//   { id: 2, picture:s2, des1: 'Automated Payroll', des2:"for India's finest disruptors", des3: 'Automated Payroll & Compliances | Built for Startups' },
//   { id: 3, picture:s3, des1: 'Easy In-person Payments', des2:"for India's finest disruptors", des3: 'Quick Payments | Seamless Integration | Top-tier UPI stack' },
//   { id: 4, picture:s4, des1: 'Effortless Banking', des2:"for India's finest disruptors", des3: 'Powerful Automation | Smart Dashboard | Integrated Access' },
  
// ]

//  const showSlide=()=>{
//     return images?.map((item)=>{
//         return<div style={{display:'flex',width:'90%',justifyContent:'center',alignItems:'center',position:'relative'}} >
//           <div style={{display:'flex',width:'50',alignItems:'center',marginLeft:-2,marginTop:155,flexDirection:'column',position:'absolute'}}>
//           <div style={{color:'blue',background:'',fontSize:45,whiteSpace:'nowrap',}}>{item.des1}</div>
//           <div style={{color:'black',background:'',fontSize:45,whiteSpace:'nowrap',marginLeft:-50,marginTop:30}}>{item.des2}</div>
//           <div style={{color:'black',background:'',fontSize:15,whiteSpace:'nowrap',marginLeft:-50,marginTop:30}}>{item.des3}</div>
//           <Button variant='contained' style={{color:'',marginLeft:-100,marginTop:40}}>Sign Up Now</Button>
//           </div>
//           <img src={item.picture} style={{width:'100%',height:'100%', borderRadius:10,marginLeft:'',marginRight:''}} />
          
//           </div>

//     })
//  }

//  const handleBackward=()=>{
//   sld.current.slickPrev()
//  }
//  const handleForward=()=>{
//   sld.current.slickNext()
//  }



//  return(<div style={{width:'80%',position:'relative',marginTop:40,background:'#F0F5FF'}}>
//   {/* <div style={{height:20,width:20,borderRadius:10,background:'#95a5a6',marginLeft:'-2%',display:'flex',top:'40%',justifyContent:'center',alignItems:'center',position:'absolute',opacity:'0.5'}}>
//     <ArrowBackIosIcon onClick={handleBackward}/>
//   </div> */}
//     <Slider ref={sld} {...settings}>
      
//      {showSlide()}
//   </Slider>
//   {/* <div  style={{height:20,width:20,borderRadius:10,background:'#95a5a6',display:'flex',top:'40%',right:'0.01%',justifyContent:'center',alignItems:'center',position:'absolute',opacity:'0.5'}}>
//     <ArrowForwardIosIcon onClick={handleForward}/>
//   </div> */}
//   </div>
// );
// }

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import s3 from '../../../assests/r1.png'
import s1 from '../../../assests/r2.png'
import s2 from '../../../assests/r3.png'
import s4 from '../../../assests/r4.png'
import { createRef } from "react";
import { Button } from "@mui/material";

export default function SliderComponent(props){

  var sld =createRef()

 


    var settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows: false,
        fade: true,
  cssEase:'linear'
      }; 
  
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   cssEase:'linear'
  // };
      
      
 
 
 const images = [
  { id: 1, picture:s1, des1: 'Advanced Payment Solutions', des2:"for India's finest disruptors", des3: '100+ Payment Methods | Easy Integration | Powerful Dashboard' },
  { id: 2, picture:s2, des1: 'Automated Payroll', des2:"for India's finest disruptors", des3: 'Automated Payroll & Compliances | Built for Startups' },
  { id: 3, picture:s3, des1: 'Easy In-person Payments', des2:"for India's finest disruptors", des3: 'Quick Payments | Seamless Integration | Top-tier UPI stack' },
  { id: 4, picture:s4, des1: 'Effortless Banking', des2:"for India's finest disruptors", des3: 'Powerful Automation | Smart Dashboard | Integrated Access' },
  
]

 const showSlide=()=>{
    return images?.map((item)=>{
        return<div style={{display:'flex',background:'white',width:'90%',justifyContent:'center',alignItems:'center',position:'relative'}} >
          {/* <div style={{display:'flex',width:'50',alignItems:'center',marginLeft:-2,marginTop:155,flexDirection:'column',position:'absolute'}}>
          <div style={{color:'blue',background:'',fontSize:45,whiteSpace:'nowrap',}}>{item.des1}</div>
          <div style={{color:'black',background:'',fontSize:45,whiteSpace:'nowrap',marginLeft:-50,marginTop:30}}>{item.des2}</div>
          <div style={{color:'black',background:'',fontSize:15,whiteSpace:'nowrap',marginLeft:-50,marginTop:30}}>{item.des3}</div>
          <Button variant='contained' style={{color:'',marginLeft:-100,marginTop:40}}>Sign Up Now</Button>
          </div> */}
          <img src={item.picture} style={{width:'100%',height:'100%', borderRadius:10,marginLeft:'',marginRight:''}} />
          
          </div>

    })
 }

 const handleBackward=()=>{
  sld.current.slickPrev()
 }
 const handleForward=()=>{
  sld.current.slickNext()
 }



 return(<div style={{width:'80%',position:'relative',marginTop:40,background:'#F0F5FF'}}>
  {/* <div style={{height:20,width:20,borderRadius:10,background:'#95a5a6',marginLeft:'-2%',display:'flex',top:'40%',justifyContent:'center',alignItems:'center',position:'absolute',opacity:'0.5'}}>
    <ArrowBackIosIcon onClick={handleBackward}/>
  </div> */}
    <Slider ref={sld} {...settings}>
      
     {showSlide()}
  </Slider>
  {/* <div  style={{height:20,width:20,borderRadius:10,background:'#95a5a6',display:'flex',top:'40%',right:'0.01%',justifyContent:'center',alignItems:'center',position:'absolute',opacity:'0.5'}}>
    <ArrowForwardIosIcon onClick={handleForward}/>
  </div> */}
  </div>
);
}