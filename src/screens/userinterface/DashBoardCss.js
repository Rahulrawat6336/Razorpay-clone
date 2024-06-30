import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width:"100%",
    height:"100%",
    background:"#dfe4ea",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    width:"60%",
    height:"auto",
    borderRadius:10,
    background:"#fff",
    padding:15,
    boxShadow:"0 0 15px #222"
  },
  center:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  leftBarStyle:{
    padding:5,
    display:"flex",
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:"flex-start",
    margin:4,
    background:'whitesmoke'
    
  },
  nameStyle:{
    fontFamily:'Kanit',
    fontSize:16,
    fontWeight:'bold',
    marginTop:5,
    marginBottom:2,
    color:'black'
  },
  phoneStyle:{
    fontFamily:'Kanit',
    fontSize:12,
    fontWeight:'bold',
    color:'#636e72'
 
   },
   emailStyle:{
    fontFamily:'Kanit',
    fontSize:12,
    fontWeight:'bold',
    color:'#636e72'
   },
  //  menuStyle:{
  //   fontFamily:'Kanit',
  //   fontSize:18,
  //   fontWeight:'bold',
  //   display:'flex',
  //   justifyContent:'left',
  //   width:300,
  //  },
   menuStyle:{
    marginInline:'2px',
     background:'whitesmoke',
     fontWeight:'lighter',
     
   },
   menuItemStyle:{
    fontFamily:'Kanit',
    fontSize:13,
    fontWeight:'bold'
   }
});