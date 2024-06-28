import { Button, Grid } from "@mui/material";
import Logo from '../../../assests/logo.webp'

export default function FooterComponent(){
    var list1=['RazorpayX',
       ' Source to pay',
        'Current Accounts',
        'Payouts',
        'Payout Links',
        'Corporate Credit Card']

        var listitem1= list1?.map((item,index)=>(
                <li key={index} style={{marginTop:15}}>{item}</li>
        ))

        var list2=['Razorpay Capital',
            'Instant Settlements']
     
             var listitem2= list2?.map((item,index)=>(
                     <li key={index} style={{marginTop:15}}>{item}</li>
             ))

             
        var list3=['Refer and Earn',
            'Onboarding APIs']
     
        var listitem3= list3?.map((item,index)=>(
                <li key={index } style={{marginTop:15}}>{item}</li>
        ))

        
        var list4=['Route',
            'Invoices',
            'Freelancer Payments',
            'International',
            'Flash Checkout',
            'UPI',
            'ePOS',
            'Checkout Demo',
            'RazorpayX Payroll']
     
             var listitem4= list4?.map((item,index)=>(
                     <li key={index} style={{marginTop:15}}>{item}</li>
             ))
        


    return(<Grid container spacing={3} style={{display:'flex',height:'auto',width:'100%',background:'#F0F5FF'}}>
        <Grid item xs={12}  style={{display:'flex',WebkitAlignItems:'flex-start',textAlignLast:'inherit',verticalAlign:'middle',marginLeft:85,marginTop:25,flexDirection:'column',fontSize:45,fontWeight:'bold'}}>
            
            Supercharge your business with Razorpay
        </Grid>
        <Grid item xs={12} style={{display:'flex',marginLeft:85}}>
            <Button variant="contained" >Sign Up Now</Button>
            </Grid>

            <Grid item xs={12} style={{display:'flex',marginTop:15,marginLeft:85}}>
            <Grid item xs={6} style={{display:'flex',justifyItems:'flex-start',alignItems:'flex-start',flexDirection:'row',justifyContent:''}}>
            <Grid item xs={3}>
                <img src={Logo}  style={{width:100,height:100}}/>
                
                <p style={{fontWeight:'lighter'}}>

               Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</p>

              <p style={{fontWeight:'lighter'}}> RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</p>

              <p style={{fontWeight:'lighter'}}>Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</p>

              <p style={{fontWeight:'lighter'}}>Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI, RBL, Yes bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</p>
            </Grid>
            <Grid item xs={3} style={{display:'',marginLeft:65,justifyContent:'flex-start',alignItems:'flex-start'}}>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>BANKING PLUS</h1>
                <ul style={{color:'blue'}}>
                    {listitem1}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>LENDING</h1>
                <ul style={{color:'blue'}}>
                    {listitem2}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>BECOME A PARTNER</h1>
                <ul style={{color:'blue'}}>
                    {listitem3}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>MORE</h1>
                <ul style={{color:'blue'}}>
                    {listitem4}
                </ul>

            </Grid>
            </Grid>
            <Grid item xs={6} style={{display:'flex',justifyItems:'flex-start',alignItems:'flex-start',flexDirection:'row'}}>
            <Grid item xs={3} style={{display:'',marginLeft:65,justifyContent:'flex-start',alignItems:'flex-start'}}>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>BANKING PLUS</h1>
                <ul style={{color:'blue'}}>
                    {listitem1}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>LENDING</h1>
                <ul style={{color:'blue'}}>
                    {listitem2}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>BECOME A PARTNER</h1>
                <ul style={{color:'blue'}}>
                    {listitem3}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>MORE</h1>
                <ul style={{color:'blue'}}>
                    {listitem4}
                </ul>

            </Grid>
            <Grid item xs={3} style={{display:'',marginLeft:65,justifyContent:'flex-start',alignItems:'flex-start'}}>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>BANKING PLUS</h1>
                <ul style={{color:'blue'}}>
                    {listitem1}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>LENDING</h1>
                <ul style={{color:'blue'}}>
                    {listitem2}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>BECOME A PARTNER</h1>
                <ul style={{color:'blue'}}>
                    {listitem3}
                </ul>
                <h1 style={{whiteSpace:'nowrap',fontSize:15,marginTop:45}}>MORE</h1>
                <ul style={{color:'blue'}}>
                    {listitem4}
                </ul>

            </Grid>

            </Grid>
            </Grid>

    </Grid>)
}