// import { Grid } from "@mui/material"
// import d1 from '../../src/assests/d1.webp'
// import dash from "../assests/dash.png"


// export default function SignInPicture(){
//     return (
        
//         <Grid container spacing={2} style={{
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// height: '100%',
// width:500,
// fontFamily: "kanit", background: 'whitesmoke',
//         }}>
//             <Grid item xs={12} style={{display:'flex',flexDirection:'column'}}>
//                 <div><img src={dash}  style={{width:50,height:50,marginLeft:20}}/> </div>
//                     <div style={{ fontWeight: 'bold', fontSize: 35,marginLeft:80,marginTop:80 }}>Hi, Welcome back</div>
//                     <div style={{ display:'flex',marginTop:25,whiteSpace:'nowrap',fontSize:18,marginLeft:60 }}>More effectively with optimized workflows.</div>
//                 </Grid>
//                 <Grid item xs={12} style={{display:'flex',flexDirection:'column',marginTop:60}}>
//                     <img  src={d1} />
//                 </Grid>
//             </Grid>)
// }

import { Grid } from "@mui/material"
import d1 from '../../src/assests/d1.webp'
import dash from "../assests/pic.png"


export default function SignInPicture(){
    return (
        
        <Grid container spacing={2} style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
height: '100%',
width:500,
fontFamily: "kanit", background: 'whitesmoke',
        }}>
           
                <Grid item xs={12} style={{display:'flex',flexDirection:'column',marginTop:0}}>
                    <img  src={dash}  />
                </Grid>
            </Grid>)
}