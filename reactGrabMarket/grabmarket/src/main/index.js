import './index.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import  Card  from './Card.js'
import {Link} from 'react-router-dom'
import {API_URL}from "../config/constants.js"
import { Carousel } from "antd"

function MainPage(){
   const [info, setinfo] = useState([])
   const [banners, setBanners] = useState([])
   
    useEffect(()=>{
    let url = `${API_URL}/products`

        axios.get(url)
                .then((data)=> setinfo(data.data.products))

        axios.get(`${API_URL}/banners`)
                .then(result=> {
                    setBanners(result.data.banners)
                })
    },[])


  
    
    return (
        <div>
            <Carousel autoplay autoplaySpeed= {3000}>
                {
                    banners.map((banner,index)=>{
                        return (
                            <Link to={banner.href}>
                                <div id="banner">
                                    <img src={`${API_URL}/${banner.imageUrl}`} alt="" />
                                </div>
                            </Link>
                        )
                    })
                }
                
            </Carousel>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
             {info.length ===0 ? <img className="product-Noitems" src="images/products/Noproducts.png"/> :
              info.map((el,idx)=>{
                       return  (<div className="product-card">
                                    <Link className = "product-link" to={`/products/${el.id}`}>
                                        <Card  data={el} key={idx}/>
                                    </Link>
                                    </div>
              )})
              }
            </div>
       
    </div>
    )
}

export default MainPage