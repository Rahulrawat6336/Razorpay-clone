import s4 from '../../../assests/—Pngtree—international cooperation business illustration_5049451.png'

import {
  Container,
  Grid,
  Typography,
  Button,
  Grow,
  Zoom,
  SvgIcon,
} from '@mui/material';

import { useStyles } from './SideBarCss'; 

export default function SideBar() {
 var classes=useStyles()



  return (
    <section className={classes.banner} id="home">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={7}>
            <Grow in={true} timeout={1} unmountOnExit>
              <div>
                <Typography variant="h6" component="span" style={{fontSize:35,marginTop:50}} className={classes.bannerTagline}>
                Welcome back 👋
                Jaydon Frankie
                </Typography>
                <Typography variant="h3" component="h1" style={{fontSize:15,color:'whitesmoke'}}>
                  {`If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`}
            
                </Typography>
                <Button
                  variant="contained"
                  style={{color:'white',background:'#00876A',marginTop:40}}
                >
                  Go Now
                </Button>
              </div>
            </Grow>
          </Grid>
          <Grid item xs={12} md={6} xl={5}>
            <Zoom in={true} timeout={800} unmountOnExit>
              <img src={s4} style={{width:200,height:200,borderRadius:50,marginTop:40}} alt="Header Img" />
            </Zoom>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};


