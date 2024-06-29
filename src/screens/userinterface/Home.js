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
import ScrollComponents from "../../components/admin/userinterface/ScrollComponent";

export default function Home() {








   return (
      <div style={{ height: '100%', width: '100%', fontFamily: 'kanit', background: '#F0F5FF' }}>
         <div >

            <div style={{ position: 'fixed', width: '100%', display: 'flex', top: 0, zIndex: 2, }}> <Header /></div>


         </div>
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: 90, position: '', top: 50, width: '' }}>
            <SliderComponent />
         </div>
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: 90, position: '', top: 50, width: '' }}>
            <Slider2Compo />
         </div>



         <div style={{ display: 'flex', background: '', justifyContent: 'center', marginTop: 90, position: '', top: 50, width: '' }}>

            <ScrollComponents />

         </div>
         <div style={{ marginTop: 90, position: '', top: 50, width: '' }}>
            <FooterComponent />
         </div>

      </div>
   )
}

