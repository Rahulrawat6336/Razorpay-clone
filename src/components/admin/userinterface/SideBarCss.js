    import { makeStyles } from '@mui/styles';
    import back from '../../../assests/back.avif'

   export const useStyles = makeStyles((theme) => ({
      banner: {
        marginTop: 1,
        padding: '1px 1px 1px 0',
        backgroundImage: `url(${back})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:800,
        height:300,
        borderRadius:20,
        margin:0
      },
      bannerTagline: {
        fontWeight: 700,
        letterSpacing: '0.8px',
        padding: '1px 13px',
        // background: `linear-gradient(to right, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)`,
        // border: `1px solid ${theme.palette.common.white}50`,
        fontSize: 100,
        color:'white',
        marginBottom: 16,
        display: 'inline-block',
      },
    
    }));
    
    
    