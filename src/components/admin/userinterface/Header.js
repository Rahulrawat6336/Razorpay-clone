
        import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../../assests/logo.webp'
import Flag from '../../../assests/flag.svg'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Header() {

  var navigate =useNavigate()


  
 var name =['Payments','Banking+','Payroll','Partners','Resources','Support','Pricing']

 const  header=()=>{
    return name?.map((item)=>{
        return(
            <div style={{color:'#636e72',fontSize:18,marginLeft:40}}>{item}
            
            </div>
            
        )
    })
 }

 const handleClick=()=>{
  navigate('/signin')
 }

 const handleClick1=()=>{
  navigate('/dashboard')
 }



    return (
        <Box sx={{ flexGrow: 5, position: 'relative',background:'#F0F5FF' }}  style={{background:'#F0F5FF'}}>
          <AppBar style={{ background: '#F0F5FF',opacity:.9,height:85 }} position="static">
            <Toolbar style={{ display: 'flex', justifyContent:'',alignItems:'center' }}>
              <img onClick={()=>navigate('/home')} src={Logo} sizes='small' style={{ width:120 ,marginLeft:120 ,cursor:'pointer'}} />
              
              <div style={{ display: 'flex',color:'#636e72', width: 110 ,marginLeft:30, justifyContent: 'space-between' }}>

             {header()}
            
                  <div style={{ display: 'flex', flexDirection: 'row',whiteSpace:'nowrap', justifyContent: 'center', alignItems: 'center', }}>
                  <img  src={Flag} sizes='small' style={{ width:30 ,marginLeft:150}} />
                  <span onClick={handleClick1} style={{color:'blue',marginLeft:19, cursor:'pointer'}}>Log In</span>
                  <Button onClick={handleClick} variant='contained' style={{color:'',marginLeft:22}}>Sign Up</Button>
                   
                  </div>
                
                
            
                
                
              </div>
            </Toolbar>
          </AppBar>
          <div>
        
    
          </div>
    
        </Box>
      );
}