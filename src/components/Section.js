import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";




const Section =()=>{

    let [data,setData]=useState("");
  

    return(
        <div className="app">
        <Left data={data} setData={setData} />
        <Right Data={data}/>

        </div>
    )
}

export default Section;