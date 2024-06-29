import { Grid } from "@mui/material";
import SignInDetail from "../../components/SignInDetail";
import Header from "../../components/admin/userinterface/Header";
import SignInPicture from "../../components/SignInPicture";

export default function SignIn() {
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        width: '100%',
        fontFamily: "kanit", background: '#ffff',
        flexDirection:'row'
    }}>
        <Grid container spacing={3} style={{display:'flex',flexDirection:'row'}}>
        {/* <Grid item xs={12}>
        
            
            <div style={{position:'fixed',width:'100%',display:'flex',top:0,zIndex:2,}}> <Header /></div>
 
 
        
        </Grid> */}
    
        <Grid item xs={12} style={{display:'flex',flexDirection:'row'}}>
            <Grid item xs={4} style={{display:'flex',height:'100vh'}}>
            <SignInPicture/>
            </Grid>

            <Grid item xs={8} style={{display:'flex',marginLeft:300,height:'auto',background:'white'}}>
                <SignInDetail/>
            </Grid>


        </Grid>
       

        </Grid>
    </div>)
}