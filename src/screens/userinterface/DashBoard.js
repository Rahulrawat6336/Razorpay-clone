import { useState } from "react";
import { useStyles } from "./DashBoardCss";
import { Avatar, AppBar, Box, Toolbar, Typography, Grid, Paper } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BookIcon from '@mui/icons-material/Book';
import DescriptionIcon from '@mui/icons-material/Description';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import dash from '../../assests/dash.png';
import Header from "../../components/admin/userinterface/Header";
import DashDetails from "./DashDetails";
import { Route, Router, Routes } from "react-router-dom";

export default function Dashboard(props){
  const classes = useStyles();
  const navigate = useNavigate();

  var adminData=JSON.parse(localStorage.getItem('ADMIN'))
 
 
  
  return(
    <Box sx={{ flexGrow: 1 }} >
        {/* <AppBar position="sticky"> 
          <Toolbar variant="dense"> 
            <Typography variant="h6" color="inherit" component="div">
              MedBazzar
            </Typography>
          </Toolbar>
        </AppBar> */}
        <div>
        <Header />
        </div>
        <Grid container spaces={3} style={{paddingInlineStart:5}} >
          <Grid item xs={12} style={{position:'fixed',top:0}}>
            
          </Grid>
          <Grid item xs={2.2} style={{height:'100vh',position:'sticky',top:0}} >
            <Paper style={{height:'100vh',background:'whitesmoke'}} >
              <div className={classes.leftBarStyle}>
              <img src={dash}  style={{height:50,width:50,borderRadius:25}}/>
               
              </div>
              <div className={classes.menuStyle}>
                <span style={{fontWeight:'bold',fontSize:13,marginLeft:25}}>OVERVIEW</span>
                
                <List>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/dashboard/detail')}>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Dashboard</span>} />
                    </ListItemButton>
                  </ListItem>


                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('')}>
                      <ListItemIcon>
                        <WorkIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Ecommerce</span>} />
                    </ListItemButton>
                  </ListItem>

                 
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('') }>
                      <ListItemIcon>
                        <SignalCellularAltIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Analytics</span>} />
                    </ListItemButton>
                  </ListItem>

                  
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('') }>
                      <ListItemIcon>
                        <AccountBalanceIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Banking</span>} />
                    </ListItemButton>
                  </ListItem>

                 
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('') }>
                      <ListItemIcon>
                        <BookIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Booking</span>} />
                    </ListItemButton>
                  </ListItem>

                  
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('') }>
                      <ListItemIcon>
                        <DescriptionIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>File</span>} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('') }>
                      <ListItemIcon>
                        <DesktopWindowsIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Courses</span>} />
                    </ListItemButton>
                  </ListItem>


                  <span style={{fontWeight:'bold',fontSize:13,marginLeft:20,marginTop:95}}>MANAGEMENT</span>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('') }>
                      <ListItemIcon>
                        <AccountBoxIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>User</span>} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <ProductionQuantityLimitsIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Order</span>} />
                    </ListItemButton>
                  </ListItem>


                 
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <ViewHeadlineIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Blog</span>} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div> 
            </Paper>

          </Grid> 
          
          <Grid item xs={9.8} style={{padding:20}}>

            <DashDetails/>
           
            <Routes>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace={true} />}/> */}
              <Route element={<DashDetails/>} path={'/dashboard/detail'} />

               {/* <Route element={<DisplayAllCategory/>} path={'/displayallcategory'} />
             <Route element={<SubCategory/>} path={'/subcategory'} />
             <Route element={<DisplayAllSubCategory/>} path={'/displayallsubcategory'} />
             <Route element={<Brands/>} path={'/brand'} />
              <Route element={<DisplayAllBrands/>} path={'/displayallbrand'} />
             <Route element={<Products/>} path={'/product'} />
             <Route element={<DisplayAllProducts/>} path={'/displayallproduct'} />
             <Route element={<DisplayAllProductDetails/>} path={'/displayallproductdetail'} />
             <Route element={<ProductDetails/>} path={'/productdetail'} />
             <Route element={<Banners/>} path={'/banner'} />
             <Route element={<Concern/>} path={'/concern'} /> */}
            </Routes> 
            
  
          </Grid>
        </Grid>
        
                 </Box>
  )
}