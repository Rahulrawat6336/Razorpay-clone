import { Grid, TextField, Button } from "@mui/material";

export default function SignInDetail() {


    return (


        <Grid container spacing={2} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 'auto',
            width: 400,
            fontFamily: "kanit", background: 'white',
        }}>
            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', marginTop: 95 }}>
                <div style={{ fontWeight: 'bold', fontSize: 23 }}>Sign in to your account</div>
                <div style={{ display: 'flex', marginTop: 25, whiteSpace: 'nowrap' }}>Don't have an account?<span style={{ display: 'flex', color: 'green', whiteSpace: 'nowrap' }}>Get started</span></div>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', marginTop: -115, whiteSpace: 'nowrap', flexDirection: 'column' }}>
                <TextField

                    id="outlined-required"
                    label="Email address"
                    fullWidth

                />
                <div style={{ fontWeight: 'lighter', fontSize: 15, marginLeft: 'auto', marginTop: 5 }}>forget password?</div>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', marginTop: -195, whiteSpace: 'nowrap' }}>
                <TextField

                    id="outlined-required"
                    label="Password"
                    fullWidth

                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" style={{ background: "black", height: 50, marginTop: -335 }} fullWidth>Sign in</Button>
            </Grid>
        </Grid> 
       
    )
}