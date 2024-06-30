import { Grid } from "@mui/material";
import SideBar from "../../components/admin/userinterface/SideBar";
import DashSlider from "../../components/admin/userinterface/DashSlider"
import Card from "../../components/chart/Card";
import PieChart from '../../components/chart/PieChart'
import ColumnChart from '../../components/chart/ColumnChart'
import New from   '../../assests/new.png'
import Rel from   '../../assests/rel.png'

export default function DashDetails(){
    return(
        <Grid container spacing={3} style={{display:'flex',width:'100%',height:'100%',}}>
            <Grid item xs={7} style={{}}>
                <SideBar/>
            </Grid>
            <Grid item xs={5} style={{ display:'',marginLeft:""}}>
                <DashSlider/>
            </Grid>
            <Grid item xs={12} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'-10%'}}>
            <Grid item xs={3} style={{}}>
                <Card name={'Total active users'}  Number={18765}/>
            </Grid>
            <Grid item xs={3} style={{}}>
                <Card name={'Total installed'} Number={4765}/>
            </Grid>
            <Grid item xs={3} style={{}}>
                <Card name={'Total downloads'} Number={765}/>
                </Grid>
            </Grid>
            <Grid item xs={4.5}>
                <PieChart/>
            </Grid>
            <Grid item xs={7.5}>
                <ColumnChart/>
            </Grid>
            <Grid item xs={12} style={{display:'flex',flexDirection:'row'}}>
                <img src={New} style={{width:'70%',height:'70%'}} />
                <img src={Rel}  style={{width:'30%',height:'70%'}} />

            </Grid>
        </Grid>
    )
}