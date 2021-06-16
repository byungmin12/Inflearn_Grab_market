import './index.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import  Card  from './Card.js'
import {Link} from 'react-router-dom'


function MainPage(){
   const [info, setinfo] = useState([])
   
    useEffect(()=>{
    let url = "https://ce051a97-a55d-4c9d-a516-442395f25ca0.mock.pstmn.io/products"

     return   axios.get(url)
                .then((data)=> setinfo(data.data.products))
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