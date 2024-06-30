import LineChart from "./LineChart"

export default function Card(props){

    // var data=[{id:1,name:'Total active users',Number:'18,765',date:''},
    //     {id:2,name:'Total installed',Number:'4765',date:''},
    //     {id:3,name:'Total downloads',Number:'765',date:''},

    // ]

    var cardData=()=>{
    
            return <div style={{display:'flex',fontFamily:'kanit',width:500,height:155,flexDirection:'column',background:'', boxShadow: '5px 5px 8px whitesmoke',}}>
                <div style={{fontWeight:'bold',fontSize:15,marginLeft:15}}>{props?.name}</div>
                <div style={{fontWeight:'bold',marginLeft:15,justifyContent:'space-between',fontSize:25,display:'flex',flexDirection:'row',alignItems:'center'}}>
                    {props?.Number}
                    <LineChart/>
                    </div>
                    <div style={{fontWeight:'lighter',fontSize:15,marginLeft:25}}>+0.2% last 7 days</div>

            </div>
    
    }


    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:"center",background:'', boxShadow: '5px 5px 25px whitesmoke',}}>
            {cardData()}

        </div>
    )
}