import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
const [data,setdata]=useState([

    {
        
        "rtitle":"",
        "rincrediants":"",
        "image":""
        
}
])
const inputHandler=(event)=>
    {
        setdata({...data,[event.target.name]:event.target.value},[])
    }
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(data)
            if(response.data.status=="success")
                {
                    alert("Successfully added")
                }else{
                    alert("Error")
                }
        }
    ).catch().finally()
}

  return (
    <div>
<Nav/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Recepe name</label>
            <input type="text" className="form-control" name="rtitle" value={data.rtitle} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">ingredients</label>
        <input type="text" className="form-control" name="rincrediants" value={data.rincrediants} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Image</label>
        <input type="text" className="form-control" name='image' value={data.image} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success" onClick={readValue}>Add</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add