import React from "react";

const Left=({data,setData})=>{


    return(

<div className="left">
<input  className="textarea" type="text" placeholder="Enter  Text" value={data} onChange={(e)=>{setData(e.target.value)}}/>
</div>

    )
}


export default Left;