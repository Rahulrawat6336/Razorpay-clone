import { makeStyles } from "@mui/styles"
import { hover } from "@testing-library/user-event/dist/hover"
export const useStyles= makeStyles({
    root:{ display:'',
        justifyContent:'center',
        height:'90%',
        width:'80%',
        alignItems:'center',
        background:'white'

    },
    
    container:{
        display:'flex'
    },

    card:{
        height:450,
        margin:50,
        boxShadow: '5px 5px 8px whitesmoke',
        overflow:'hidden',
        hover :{
            cursor:'pointer',
    
        },

       

    },
    intro:{
        height:110,
        width:350,
        padding:6,
        boxSizing:'border-box',
        position:'relative',
        bottom:110,
        background:'white',
        color:'black',
        transition:.5,

        hover:{
            height:220,
            bottom:240,
            background:'black',
    
        },
    },
    h1:{
        margin:5,
        fontSize:30

    },
    h2:{
        margin:1,
        fontSize:16,
        color:'black'

    },

    p:{
        fontSize:20,
        margin:20,
        visibility:'hidden',
        opacity:0,
        hover:{
            opacity:1,
            visibility:'visible' 
         }
     
    },

    // card:
    // card:

    // card:
})


// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     height: '100vh',
//     alignItems: 'center',
//     background: 'whitesmoke',
//   },

//   container: {
//     display: 'flex',
//   },

//   card: {
//     height: 500,
//     margin: 50,
//     boxShadow: '5px 5px 20px black',
//     overflow: 'hidden',
//     position: 'relative', // Added for proper positioning of intro element
//   },

//   intro: {
//     height: 70,
//     width: 350,
//     padding: 6,
//     boxSizing: 'border-box',
//     position: 'absolute', // Consistent positioning
//     bottom: 240,
//     background: 'rgba(27,27,27,.5)',
//     color: 'white',
//     transition: '.5s',
//   },

//   h1: {
//     margin: 10,
//     fontSize: 40,
//   },

//   p: {
//     fontSize: 20,
//     margin: 20,
//     visibility: 'hidden',
//     opacity: 0,
//     transition: 'opacity 0.5s ease-in-out', // Added transition for smooth visibility change
//   },

//   card:{'&:hover': {
//     cursor: 'pointer', // Hover effect now applied directly to the card element
//   }},

//   card:{'&:hover $intro': {
//     height: 220,
//     bottom: 240,
//     background: 'black',
//   }},

//   card:{'&:hover $p': {
//     opacity: 1,
//     visibility: 'visible',
//   }},
// });


