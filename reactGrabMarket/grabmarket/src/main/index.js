import './index.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import  Card  from './Card.js'
import {Link} from 'react-router-dom'


function MainPage(){
   const [info, setinfo] = useState([])
   
    useEffect(()=>{
    let url = "http://localhost:8080/products"

     return   axios.get(url)
                .then((data)=> setinfo(data.data))
    },[])

   console.log(info)
  
    
    return (
        <div>
          
            <div id="banner">
                <img src="images/banners/banner1.png" alt="" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
              {info.map((el,idx)=>{
                       return  (<div className="product-card">
                                    <Link className = "product-link" to={`/products/${el.id}`}>
                                        <Card  data={el} key={idx}/>
                                    </Link>
                                    </div>
              )})}
            </div>
       
    </div>
    )
}

export default MainPage