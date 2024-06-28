import Header from "../../components/admin/userinterface/Header";
import SliderComponent from "../../components/admin/userinterface/SliderComponent";
import Slider2Compo from "../../components/admin/userinterface/Slider2Compo";
import PaymentComponent from "../../components/admin/userinterface/PaymentComponent";
import FooterComponent from "../../components/admin/userinterface/FooterComponent";
import p1 from '../../assests/p1.jpg'
import s2 from '../../assests/p2.webp'
import s3 from '../../assests/p3.webp'
import s4 from '../../assests/s4.webp'
import s41 from '../../assests/a1.jpg'
import s22 from '../../assests/a2.webp'
import s33 from '../../assests/a3.jpg'
import s44 from '../../assests/a4.avif'

export default function Home(){

   const images = [ 
      { id: 1, picture:p1, des1: 'Payment Gateway', des2:"Offer a seamless payment experience on your website or app",  },
      { id: 2, picture:s2, des1: 'Payment Button', des2:"Effortlessly add a pay Now button without any coding required",},
      { id: 3, picture:s3, des1: 'Payment Link', des2:"Create and share links over email, text and social to accept payments instantly", },
      { id: 4, picture:s4, des1: 'Razorpay POS', des2:"Accept seamless in-store payments with india's best POS solution", },
      
    ]

    const images1 = [ 
      { id: 1, picture:s41, des1: 'API & Bulk Payouts', des2:"Make multiple payouts with a single click from your dashboard",  },
      { id: 2, picture:s22, des1: 'Source to Pay', des2:"Control and optimize vendor payments with an integrated payables solution",},
      { id: 3, picture:s33, des1: 'Payout Link', des2:"Share payout links for instant payments, no bank details needed", },
      { id: 4, picture:s44, des1: 'TaxPayments', des2:"Online tax payments in a single click", },
      
    ]

    const images2 = [ 
      { id: 1, picture:p1, des1: 'Current Account', des2:"Automate banking with india's top current account for startups",  },
      { id: 2, picture:s2, des1: 'Escrow Account', des2:"automate Escrow money transfers with total safety and compliance",},
      { id: 3, picture:s33, des1: 'Forex Management', des2:"Get effortless foreign funding management with expert support", },
      { id: 4, picture:s44, des1: 'Accounting Integration', des2:"Easy integrations with your accounting software", },
      
    ]

    const images3 = [ 
      { id: 1, picture:s41, des1: 'Payroll for Startups', des2:"Master payroll and compliance with a solution built just for startups",  },
      { id: 2, picture:s22, des1: 'Payroll for CAs', des2:"Transform payroll and compliance for your clients with RazorpayX",},
      { id: 3, picture:s3, des1: 'Payroll for Enterprises', des2:"Get india's No,1 payroll software for enterprises with RazorpayX", },
      { id: 4, picture:s4, des1: 'Accounting Integration', des2:"Easy integrations with your accounting software", },
      
    ]
    
   



 return(
    <div style={{height:'100%',width:'100%',fontFamily:'kanit',background:'#F0F5FF'}}>
          <div >
            
           <div style={{position:'fixed',width:'100%',display:'flex',top:0,zIndex:2,}}> <Header /></div>


          </div> 
          <div style={{display:'flex',justifyContent:'center',marginTop:90,position:'',top:50,width:''}}>
            <SliderComponent/>
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:90,position:'',top:50,width:''}}>
            <Slider2Compo/>
            </div>

            <div style={{display:'flex',background:'',justifyContent:'center',marginTop:90,position:'',top:50,width:''}}>
            
               <PaymentComponent images={images} head={'Accept Payments'}/>
            
            </div>
            <div style={{display:'flex',background:'',justifyContent:'center',marginTop:90,position:'',top:50,width:''}}>
            
            <PaymentComponent images={images1} head={'Make Payouts'}/>
         
         </div>
         <div style={{display:'flex',background:'',justifyContent:'center',marginTop:90,position:'',top:50,width:''}}>
            
            <PaymentComponent images={images2} head={'Start Business Banking'}/>
         
         </div>
         <div style={{display:'flex',background:'',justifyContent:'center',marginTop:90,position:'',top:50,width:''}}>
            
            <PaymentComponent images={images3} head={'Automate Payroll'}/>
         
         </div>
            <div style={{marginTop:90,position:'',top:50,width:''}}>
            <FooterComponent/>
            </div>
   
    </div>
 )   
}

