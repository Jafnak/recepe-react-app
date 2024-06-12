import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
const [data,setData]=useState([])
const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
        (response)=>{
          setData(response.data)
        }
      ).catch().finally()
}
useEffect(()=>{fetchData()},[])
    return (
        <div>
<Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


{data.map(
    (value,index)=>{
        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

            <div class="card">
                <img src={value.image} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{value.rtitle}</h5>
                    <p class="card-text">{value.rincrediants}</p>
                    <a href="#" class="btn btn-primary">VIEW</a>
                </div>
            </div>

        </div>
    }
)}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View