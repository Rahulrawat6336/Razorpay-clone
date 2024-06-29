
import { makeStyles } from "@mui/styles"
export const useStyle = makeStyles({

    header: {
        background: 'black',
        color: 'white',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    },

    card: {
        width: '100vw',
        height: '100vh',
        // background:'rgb(20,50,166,.8)',
        background: 'whitesmoke',
        color: '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        position: 'sticky',
        top: 0,
    }
})


